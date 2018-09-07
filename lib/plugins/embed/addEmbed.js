"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _draftJs = require("draft-js");

var _default = function _default(editorState, attrs) {
  var urlType = 'embed';

  var entityKey = _draftJs.Entity.create(urlType, 'IMMUTABLE', {
    src: attrs && attrs.url || null,
    aspectRatio: attrs && attrs.aspectRatio,
    width: attrs && attrs.width,
    height: attrs && attrs.height
  });

  var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

  return _draftJs.EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter());
};

exports.default = _default;