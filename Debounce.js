module.exports = function Debounce(fn, delay) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(fn.bind(null, ...args), delay);
	}
}