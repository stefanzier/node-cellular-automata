const automata = require('./automata');

let input = '                    *                    ';
let patternNumber = 126;
let generations = 100;

automata.plot('1D', input, patternNumber, generations);
