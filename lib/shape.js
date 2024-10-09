class Shape {
  constructor(text, textColor, color) {
    this.text = text;
    this.textColor = textColor;
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return "ERROR: not specific shape";
  }
}

module.exports = Shape;
