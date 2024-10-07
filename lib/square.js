const Shape = require('./shape.js');

class Square extends Shape {
    constructor(color, textColor) {
        super(color, textColor);
    }

    render() {
        return `<rect width="100" height="100" x="0" y="0" rx="0" ry="0" fill="${this.color}">`;
    }
}

module.exports = Square;