const Shape = require('./shape');
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

const shape = new Shape();
test('shape should throw error', () => {
    expect(shape.render()).toEqual('ERROR: not specific shape');
})

const square = new Square();
square.setColor("yellow");
square.setTextColor("black");
square.setText('SQU')
test('square match set values', () => {
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="200" height="200" fill="yellow" />

  <text x="100" y="125" font-size="60" text-anchor="middle" fill="black">SQU</text>

</svg>`);
})

const circle = new Circle();
circle.setColor("blue");
circle.setTextColor("red");
circle.setText('CIR')
test('circle match set values', () => {
    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <circle cx="150" cy="100" r="80" fill="blue" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">CIR</text>
    
    </svg>`);
})

const triangle = new Triangle();
triangle.setColor("black");
triangle.setTextColor("purple");
triangle.setText('TRI')
test('triangle match set values', () => {
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <polygon points="100,10 150,190 50,190" style="fill:black" />
    
      <text x="100" y="125" font-size="60" text-anchor="middle" fill="purple">TRI</text>
    
    </svg>`);
})