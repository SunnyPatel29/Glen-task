var fs = require('fs');
var getNHighestScores = require("./getNHighestScores.js");

var dataFile = process.argv[2];


process.on('exit', function(code) {
  console.log("Exiting with code: " + code);
});


fs.readFile(dataFile, 'utf8', getNHighestScores);
