"use strict";

var EditorState = require('draft-js/lib/EditorState');

var ContentState = require('draft-js/lib/ContentState');

var convertFromRaw = require('draft-js/lib/convertFromRawToDraftState');

var convertToRaw = require('draft-js/lib/convertFromDraftStateToRaw');

var toPlainText = function toPlainText(editorState) {
  return editorState.getCurrentContent().getPlainText();
};

var fromPlainText = function fromPlainText(text) {
  if (!text || text === '') {
    return EditorState.createWithContent(emptyContentState);
  }

  return EditorState.createWithContent(ContentState.createFromText(text));
};

var toJSON = function toJSON(editorState) {
  return convertToRaw(editorState.getCurrentContent());
};

var fromJSON = function toState(json) {
  return EditorState.createWithContent(convertFromRaw(json));
};

module.exports = {
  toJSON: toJSON,
  fromJSON: fromJSON,
  toPlainText: toPlainText,
  fromPlainText: fromPlainText
};