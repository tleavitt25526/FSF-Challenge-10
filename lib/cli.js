const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
//const { createDocumet } = require("./document");

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
          choices: ['square', 'circle', 'triangle']
        },
      ])
      .then(() => {});
  }
}

module.exports = CLI;