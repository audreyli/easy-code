var editor;

$(function() {

  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/python");

  editor.moveCursorTo(editor.session.getLength(), 0);
  editor.focus();
});
