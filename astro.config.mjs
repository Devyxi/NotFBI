// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/support': 'https://discord.gg/q7bUuVq4vB',
		'/invite': 'https://discord.com/oauth2/authorize?client_id=1065103018212732938&permissions=268560404&integration_type=0&scope=bot',
		'/terms': 'https://notfbi.dev/terms/3',
		'/privacy': 'https://notfbi.dev/privacy/3'
	},

	adapter: cloudflare()
});