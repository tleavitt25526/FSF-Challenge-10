const Shape = require('./shape');
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

const shape = new Shape();
test('shape should throw error', () => {
    expect(shape.render()).toEqual('ERROR: not specific shape');
})

const square = new Square();
square.setColor("blue");
test('square should be blue', () => {
    expect(square.render()).toEqual('<rect width="100" height="100" x="0" y="0" rx="0" ry="0" fill="blue">');
})

const circle = new Circle();
square.setColor("blue");
test('square should be blue', () => {
    expect(square.render()).toEqual('<rect width="100" height="100" x="0" y="0" rx="0" ry="0" fill="blue">');
})

const triangle = new Triangle();
square.setColor("blue");
test('square should be blue', () => {
    expect(square.render()).toEqual('<rect width="100" height="100" x="0" y="0" rx="0" ry="0" fill="blue">');
})