const c = require('./script2.js');

const a = c.largeNumber;
const b = 998;

setTimeout(() => {
	console.log(a + b);
}, 1000)
