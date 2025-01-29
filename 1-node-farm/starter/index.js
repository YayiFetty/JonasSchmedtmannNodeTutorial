const { isUtf8 } = require("buffer");
const fs = require("fs");

const textF = fs.readFileSync("./txt/input.txt", "UTF-8");

console.log(textF);

