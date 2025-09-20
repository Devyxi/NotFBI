const fs = require('fs');
const express = require('express');
const ReadFolder = require('./ReadFolder.js');
const { minify } = require('html-minifier');
const FileWatcher = require('./FileWatcher.js');
const Debounce = require('./Debounce.js');
const compression = require('compression');

const ipList = fs.readFileSync(`${__dirname}/block.txt`, 'utf-8').split('\n');
const IP_BLOCKS = new Set( ipList.map(ip => ip.trim()).filter(ip => ip.length > 0) );
console.log(`Loaded ${IP_BLOCKS.size} IPs to block`);

function ReloadIPs() {
	const ipList = fs.readFileSync(`${__dirname}/block.txt`, 'utf-8').split('\n');
	IP_BLOCKS.clear();
	for (const ip of ipList) {
		const trimmedIP = ip.trim();
		if (trimmedIP.length > 0) {
			IP_BLOCKS.add(trimmedIP);
		}
	}
	console.log(`Reloaded ${IP_BLOCKS.size} IPs to block`);
}

const watcher = new FileWatcher(__dirname, false);
watcher.onChange = Debounce((file) => {
	// console.log(`File changed: ${file}`);
	if (file === `${__dirname}/block.txt`) {
		ReloadIPs();
	}
}, 1000);

const app = express();
app.use( compression() );
app.use( express.raw({ limit: '100mb' }) );
//define the CORS headers
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, key');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

	// Caching stuff lol
	res.setHeader('Cache-Control', 'max-age=31536000'); // 30 days for assets
	res.setHeader('Expires', new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toUTCString()); // 30 days

	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}
	next();
});

function GetTimestamp() {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const day = now.getDate();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function ResolveIP(input) {
	const [ IPv6, IPv4 ] = input.split(',');
	return IPv6 ?? IPv4 ?? null;
}

const blocked_terms = [ 'wp', '.env', '.git', 'config', 'eval' ];

let bannedPage = null;

app.all('*', (req, res, next) => {
	bannedPage ??= pages.get('/banned');

	const IP = ResolveIP(req.headers['x-forwarded-for']) || req.socket.remoteAddress;
	if (!IP) return;

	const isBlocked = IP_BLOCKS.has(IP);
	const timestamp = GetTimestamp();
	const color = isBlocked ? '\x1b[31m' : ''; // red for blocked, normal for allowed
	console.log(`${color}[${timestamp}] ${IP} : ${req.method} ${req.url}\x1b[0m`);

	if (isBlocked && !req.url.includes('/banned')) {
		res.status(403).send(bannedPage);
		return;
	}

	const blockedTerm = blocked_terms.find(term => req.url.includes(term));
	if (blockedTerm) {
		res.status(403).send(bannedPage);
		if (!IP_BLOCKS.has(IP)) {
			fs.appendFileSync(`${__dirname}/block.txt`, `${IP}\n`);
			IP_BLOCKS.add(IP);
			console.log(`\x1b[31mAuto banning ${IP} due to ${blockedTerm} request\x1b[0m`);
		}
		return;
	}

	next();
});

app.get('/invite', (req, res) => {
	res.redirect('https://discord.com/oauth2/authorize?client_id=1065103018212732938&permissions=268560404&integration_type=0&scope=bot');
});

app.get('/support', (req, res) => {
	res.redirect('https://discord.gg/q7bUuVq4vB');
});


const POWERS = [ 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No' ];
function SmartRound(input = 0) {
	input = Math.abs(input); // remove decimal part
	if (input < 1000) return input;
	const power = ~~(Math.log10(input) / 3);
	const symbol = POWERS[power - 1];
	const value = Math.round(input / Math.pow(1000, power));
	return `${value}${symbol}`;
}

let result;
let lastRun = 0;
async function GetStats() {
	if (lastRun > Date.now() - 1000 * 60 * 60) return result;
	lastRun = Date.now();

	const response = await fetch('https://api.notfbi.dev/stats', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		}
	});

	if (!response.ok) {
		console.error(`Error fetching stats: ${response.status} ${response.statusText}`);
		return null;
	}

	const data = await response.json(); // { guilds, messages, users, updatedAt }
	if (!data) {
		console.error('Error parsing stats');
		return null;
	}

	result = {
		guilds: SmartRound(data.guilds),
		messages: SmartRound(data.messages),
		users: SmartRound(data.users),
		snapshots: SmartRound(data.snapshots),
		updatedAt: data.updatedAt,
	}
	return result;
}

const templates = new Map(); // name -> data
const templateFiles = fs.readdirSync(`${__dirname}/templates`);
for (const file of templateFiles) {
	const fileName = file.split('.').shift();
	const data = fs.readFileSync(`${__dirname}/templates/${file}`, 'utf-8');
	templates.set(fileName, data);
}

const pages = new Map(); // path -> data
const pageFiles = ReadFolder(`${__dirname}/pages`).map(x => x.replace(__dirname + '/pages', '')); // path[] (string[])
for (let i = 0; i < pageFiles.length; i++) {
	const path = pageFiles[i];

	let data = fs.readFileSync(`${__dirname}/pages/${path}`, 'utf-8');

	const extension = path.split('.').pop();
	if (extension !== 'html') {
		pages.set(path, data);
		continue;
	}

	const selectedTemplates = data.match(/{{(.*?)}}/g) ?? [];
	for (const template of selectedTemplates) {
		const templateName = template.replace(/{{|}}/g, '').trim();
		if (templates.has(templateName)) {
			const templateData = templates.get(templateName);
			data = data.replace(template, templateData);
		} else {
			console.warn(`Template ${templateName} not found`);
		}
	}

	const oldSize = data.length + 0;

	data = minify(data, {
		collapseWhitespace: true,
		minifyCSS: true,
		minifyJS: true,
		removeComments: true,
	});

	console.log(`Loaded ${path} : ${oldSize} -> ${data.length} (${(data.length / oldSize * 100 - 100).toFixed(2)}%)`);

	pages.set(path.slice(0, -5), data); // remove .html extension
}

function NormalizePath(reqPath) {
	if (reqPath === '' || reqPath === '/') return '/index';
	let url = reqPath.split('?')[0].split('#')[0]; // remove query and fragment
	url = url.replace(/\/+$/, ''); // remove trailing slash
	if (url.endsWith('.html')) url = url.slice(0, -5); // remove .html extension
	// remove path manipulation
	url = url.replace(/(\.\.|%2E%2E|%2f|%5C|%2F|%5C)/g, ''); // remove ../ and %2E%2E
	return url;
}

const assets = ReadFolder(`${__dirname}/assets`, 1);
for (const assetPath of assets) {
	const fileName = assetPath.split('/').pop();
	app.get(`/${fileName}`, async (req, res) => {
		res.status(200).sendFile(assetPath);
	});
}

app.get(`*`, async (req, res) => {

	const reqPath = NormalizePath(req.path);
	let page = pages.get(reqPath) ?? pages.get('/404');
	if (!page) {
		res.status(500).send('Internal Server Error');
		console.error(`Could not find page for ${reqPath}`);
		return;
	}

	// another round of templates lol
	const stats = await GetStats(); // { guilds, messages, users, updatedAt }
	for (const [name, value] of Object.entries(stats)) {
		page = page.replace(`{{${name}}}`, value);
	}

	res.status(200).send(page);
});

// www.notfbi.dev
const server = app.listen(3000, () => {
	console.log('Server started');
});

process.on('SIGINT', () => {
	console.log('Shutting down...');
	server.close();

	process.exit(0);
});