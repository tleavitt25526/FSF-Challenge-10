const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require("node:fs/promises");

// shape lib
const Shape = require("./shape");
const Square = require("./square");
const Circle = require("./circle");
const Triangle = require("./triangle");

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

class CLI {
  constructor() {}

  run() {
    return inquirer
      .prompt([
        {
          type: "maxlength-input",
          name: "text",
          message: "SVG logo text",
          maxLength: 3,
        },
        {
          type: "input",
          name: "textColor",
          message: "SVG logo text color",
        },
        {
          type: "input",
          name: "color",
          message: "SVG logo color",
        },
        {
          type: "list",
          name: "shape",
          message: "SVG logo shape",
          choices: ["square", "circle", "triangle"],
        },
      ])
      .then(({ text, textColor, color, shape }) => {
        let svg = null;
        switch (shape) {
          case "square":
            svg = new Square();
            break;
          case "circle":
            svg = new Circle();
            break;
          case "triangle":
            svg = new Triangle();
            break;
        }
        svg.setText(text);
        svg.setTextColor(textColor);
        svg.setColor(color);
        return fs.writeFile("./examples/logo.svg", svg.render());
      })
      .then(() => console.log("Generated logo.svg"))
      .catch((err) => console.log(err));
  }
}

module.exports = CLI;
