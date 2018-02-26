const _ = require("underscore");

// Build our patterns dictionary - helper
const generateDictionary = patternNumber => {
  patternList = ["   ", "  *", " * ", " **", "*  ", "* *", "** ", "***"];

  let patterns = {};
  let index = 7;
  while (index >= 0) {
    let pow2 = Math.pow(2, index);
    if (Math.floor(patternNumber / pow2) == 1) {
      patterns[patternList[index]] = "*";
      patternNumber = patternNumber % pow2;
    } else {
      patterns[patternList[index]] = " ";
    }
    index--;
  }

  return patterns;
};

exports.oneDimensional = (string, patternNumber, generations) => {
  let patterns = generateDictionary(patternNumber);
  let inputLength = string.length;

  // Apply pattern to new string
  _(generations).times(i => {
    var newString = "";
    _(inputLength).times(j => {
      if (j == 0) {
        pattern = string[string.length - 1] + string[0] + string[1];
      } else {
        pattern = string[j - 1] + string[j] + string[(j + 1) % inputLength];
      }
      newString += patterns[pattern];
    });

    string = newString;
  });

  return string;
};

exports.plot = (type, string, patternNumber, generations) => {
  switch (type) {
    case "1D":
      _(generations).times(i => {
        console.log(this.oneDimensional(string, patternNumber, i));
      });
      break;
    default:
      console.log("Uh oh! Please enter a valid type (1D)");
  }
};
