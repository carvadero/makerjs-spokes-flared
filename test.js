var makerjs = require('makerjs');
var StraightSpokes = require('./index.js');
console.log(makerjs.exporter.toSVG(new StraightSpokes(100, 30, 10, 5, 0, .1, .1, false)));
