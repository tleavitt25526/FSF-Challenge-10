const Shape = require('./shape');
const Rectangle = require('./rectangle');
const Circle = require('./circle');
const Triangle = require('./triangle');

const shape = new Shape();
test('shape should throw error', () => {
    expect(shape.render()).toEqual('ERROR: not specific shape');
})

const rectangle = new Rectangle();
rectangle.setColor("blue");