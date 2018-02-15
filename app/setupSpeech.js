/*****************************************************************/
/******** SPEECH RECOGNITION SETUP YOU CAN IGNORE ****************/
/*****************************************************************/
var debouncedProcessSpeech = _.debounce(processSpeech, 1000);

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(event) {
  // Build the interim transcript, so we can process speech faster
  var transcript = '';
  var hasFinal = false;
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    transcript += event.results[i][0].transcript;
    if (event.results[i].isFinal)
      hasFinal = true;
  }

  if (DEBUGSPEECH) {
    if (hasFinal) {
      //otherFeedback.setContent("SPEECH DEBUG: ready");
      console.log("SEECH DEBUG TRANSCRIPT: " + transcript);
      console.log("SPEECH DEBUG: ready");
    }
  }

  var processed = debouncedProcessSpeech(transcript);

  // If we reacted to speech, kill recognition and restart
  if (processed) {
    recognition.stop();
  }
};
// Restart recognition if it has stopped
recognition.onend = function(event) {
  setTimeout(function() {
    if (DEBUGSPEECH) {
      //otherFeedback.setContent("SPEECH DEBUG: ready");
      console.log("SPEECH DEBUG: ready");
    }
    recognition.start();
  }, 1000);
};
recognition.start();
/*****************************************************************/
/******** END OF SPEECH RECOG SETUP ******************************/
/*****************************************************************/
