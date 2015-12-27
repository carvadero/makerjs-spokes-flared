var makerjs = require('makerjs');

function StraightSpokes(outerRadius, innerRadius, count, spokeWidth, offsetPct, addRing) {

    var ring = new makerjs.models.Ring(outerRadius, innerRadius);

    this.models = {
        ring: ring
    };

    var a = 360 / count;
    var halfSpokeWidth = spokeWidth / 2;

    var offset = (offsetPct / 100) * (innerRadius - halfSpokeWidth);

    for (var i = 0; i < count; i++) {
        var spoke = new makerjs.models.Rectangle(spokeWidth, outerRadius);
        spoke.origin = [-halfSpokeWidth + offset, 0];
        makerjs.model.originate(spoke);

        makerjs.model.rotate(spoke, a * i, [0, 0]);

        makerjs.model.combine(this, spoke, false, true, true, false);

        this.models['spoke' + i] = spoke;
    }

    if (addRing) {
        this.models.ring2 = new makerjs.models.Ring(outerRadius + spokeWidth, innerRadius - spokeWidth);
    }
}


StraightSpokes.metaParameters = [
    { title: "outer radius", type: "range", min: 2, max: 100, step: 1, value: 100 },
    { title: "inner radius", type: "range", min: 1, max: 90, step: 1, value: 30 },
    { title: "spoke count", type: "range", min: 1, max: 40, step: 1, value: 10 },
    { title: "spoke width", type: "range", min: 1, max: 10, step: 1, value: 5 },
    { title: "spoke offset percent", type: "range", min: 0, max: 100, step: 1, value: 67 },
    { title: "add ring", type: "bool", value: true }
];

module.exports = StraightSpokes;
