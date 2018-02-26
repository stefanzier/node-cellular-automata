const prompt = require("prompt");

const automata = require("./automata");

prompt.start();

prompt.get(["type", "input", "pattern", "generations"], (err, result) => {
  switch (result.type) {
    case "1D":
      automata.plot("1D", result.input, result.pattern, result.generations);
      break;
    default:
      console.log("Invalid pattern. Exiting now...");
  }
});
