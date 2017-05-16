var os = require('os');

var n = process.argv[3];



var getNHighestScores = function(error, data) {
  if (error || isNaN(n)) {
    process.exit(2);
  }

  var results = [];
  var dict = {};

  var sortedScores = data.split(os.EOL).map(function(el) {
    var i = el.indexOf(":");
    debugger;
    console.log(os.EOL);
    var score = JSON.parse(el);

    console.log("test length " + i);
    console.log(score);
    var value = JSON.parse(el.slice(i + 2));

    dict[score] = value;
    return score;
  }).sort(function(a, b) {
    return b - a;
  });

  for (var i = 0; i < n; i++) {
    var score = sortedScores[i];

    score && results.push({
      score: score,
      id: dict[score].id
    });

  }

  console.log(results);
  process.exit(0);
};

module.exports = getNHighestScores;
