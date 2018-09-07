"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _draftJs = require("draft-js");

var _default = function _default(editorState, data) {
  var contentState = editorState.getCurrentContent();
  var contentStateWithEntity = contentState.createEntity('divider', 'IMMUTABLE', data);
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

  return _draftJs.EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter());
};

exports.default = _default;