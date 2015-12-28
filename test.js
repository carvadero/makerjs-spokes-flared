var makerjs = require('makerjs');
var FlaredSpokes = require('./index.js');
console.log(makerjs.exporter.toSVG(new FlaredSpokes(100, 30, 10, 5, 2, .1, .1, false)));
