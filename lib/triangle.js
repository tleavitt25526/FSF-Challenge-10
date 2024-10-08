const Shape = require("./shape.js");

class Triangle extends Shape {
  constructor(text, textColor, color) {
    super(text, textColor, color);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <polygon points="100,10 150,190 50,190" style="fill:${this.color}" />
    
      <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`;
  }
}

module.exports = Triangle;
