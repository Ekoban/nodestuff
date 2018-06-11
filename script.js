const c = require('./script2.js');

const a = c.largeNumber;
const b = 6;

setTimeout(() => {
	console.log(a + b);
}, 3000)
