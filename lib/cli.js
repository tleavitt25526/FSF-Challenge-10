const inquirer = require("inquirer");
const fs = require("node:fs/promises");

class CLI {
  constructor() {}

  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "SVG logo text",
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
        const content = "guh";
        return fs.writeFile("./examples/logo.svg", content);
      })
      .then(() => console.log("Created logo.svg"))
      .catch((err) => console.log(err));
  }
}

module.exports = CLI;
