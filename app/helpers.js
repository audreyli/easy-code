
// SPEECH SYNTHESIS SETUP
var voicesReady = false;
window.speechSynthesis.onvoiceschanged = function() {
  voicesReady = true;
  // Uncomment to see a list of voices
  // console.log("Choose a voice:\n" + window.speechSynthesis.getVoices().map(function(v,i) { return i + ": " + v.name; }).join("\n"));
};

var generateSpeech = function(message, callback) {
  if (voicesReady) {
    var msg = new SpeechSynthesisUtterance();
    msg.voice = window.speechSynthesis.getVoices()[VOICEINDEX];
    msg.text = message;
    msg.rate = 0.2;
    if (typeof callback !== "undefined")
      msg.onend = callback;
    speechSynthesis.speak(msg);
  }
};

// Helper function to detect if any commands appear in a string
var userSaid = function(str, commands) {
  for (var i = 0; i < commands.length; i++) {
    if (str.indexOf(commands[i]) > -1)
      return true;
  }
  return false;
};

var updateCursor = function(cursorPosition) {
  $('#cursor').css({
    'left': cursorPosition[0],
    'top': cursorPosition[1]
  })

  var x = cursorPosition[0];
  var y = cursorPosition[1];

  if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
    return;
  }

  var pos = editor.renderer.screenToTextCoordinates(x, y);

  LINE = pos.row;

  // highlight line
  editor.session.removeMarker(MARKER);
  var Range = ace.require('ace/range').Range;
  MARKER = editor.session.addMarker(new Range(pos.row, 0, pos.row, 1), "marker", "fullLine");

  // remove highlight after period of inactivity
  clearTimeout(TIMEOUT);
  TIMEOUT = window.setTimeout(function() {
    editor.session.removeMarker(MARKER);
  }, 100);

};

var parseInput = function(string) {
  var parser = new Parser(window.grammar.ParserRules, window.grammar.ParserStart);
  parser.feed(string);
  return parser.finish()[0][0];
}

var insertLine = function(string) {
  editor.insert(string);
  editor.insert('\n');
}

var insertLineToRange = function(string, row) {
  row = row + 1;
  var data = editor.session.getParentFoldRangeData(row);
  var indent;
  var r;
  if (data.range) {
    r = data.range;
  } else {
    r = data.firstRange;
    editor.moveCursorTo(row - 1, 0);
    insertLine(string);
    return;
  }

  indent = editor.session.getLine(r.start.row).search(/\S|$/) + 4;
  editor.session.insert(r.end, '\n' + ' '.repeat(indent) + string);
  editor.moveCursorTo(r.end.row+1, Infinity)
  if (editor.session.getLine(r.end.row+2).trim().length == 0) {
    editor.session.getDocument().removeLines(r.end.row+2, r.end.row+2);
  }
  editor.insert('\n');

}

var comment = function(row) {
  editor.moveCursorTo(row, 0);
  editor.insert('#');
}

var uncomment = function(row) {
  var line = editor.session.getLine(row).replace("#", "");
  editor.session.replace({
    start: {row: row, column: 0},
    end: {row: row, column: Number.MAX_VALUE}
  }, line);
}

var newline = function(row) {
  editor.moveCursorTo(row, 0);
  editor.insert('\n');
}

var deleteLine = function(row) {
  editor.session.getDocument().removeLines(row, row);
}

var indent = function(row) {
  editor.moveCursorTo(row, 0);
  editor.indent();
};

var unindent = function(row) {
  var line = editor.session.getLine(row);
  var indent = Math.max(0, editor.session.getLine(row).search(/\S|$/) - 4);
  console.log(indent);
  line = ' '.repeat(indent) + line.trim();
  editor.session.replace({
    start: {row: row, column: 0},
    end: {row: row, column: Number.MAX_VALUE}
  }, line);

};

var redo = function() {
  editor.redo();
}

var undo = function() {
  editor.undo();
}

var write = function(string) {
  insertLine(generateCode(parseInput(string)));
}

// text to numbers
var numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
};

function text2num(s) {
    result = "";
    a = s.toString().split(/[\s-]+/);
    for (var i=0; i<a.length; i++) {
      var x = numbers[a[i]];
      if (x != null) {
        a[i] = x;
      }
    }
    return a.join(' ');
}
