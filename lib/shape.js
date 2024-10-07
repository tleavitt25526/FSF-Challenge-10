class Shape {
  constructor(color, textColor) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  setTextColor(textColor) {
    this.textColor = color;
  }

  render() {
    return "ERROR: not specific shape";
  }
}

module.exports = Shape;
