"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasEntity = hasEntity;
exports.setEntity = setEntity;
exports.getCurrentEntityKey = getCurrentEntityKey;
exports.getCurrentEntity = getCurrentEntity;
exports.removeEntity = removeEntity;

var _draftJs = require("draft-js");

function hasEntity(entityType, editorState) {
  var entity = getCurrentEntity(editorState);

  if (entity && entity.getType() === entityType) {
    return true;
  }

  return false;
}

function setEntity() {
  var entityType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LINK';
  var data = arguments.length > 1 ? arguments[1] : undefined;
  var editorState = arguments.length > 2 ? arguments[2] : undefined;
  var setEditorState = arguments.length > 3 ? arguments[3] : undefined;
  var contentState = editorState.getCurrentContent();
  var contentStateWithEntity = contentState.createEntity(entityType, 'MUTABLE', data);
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  var newState = _draftJs.RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey);

  var selectionState = _draftJs.EditorState.forceSelection(newState, editorState.getSelection());

  setEditorState(selectionState);
}

function getCurrentEntityKey(editorState) {
  var selection = editorState.getSelection();
  var anchorKey = selection.getAnchorKey();
  var contentState = editorState.getCurrentContent();
  var anchorBlock = contentState.getBlockForKey(anchorKey);
  var offset = selection.anchorOffset;
  var index = selection.isBackward ? offset - 1 : offset;
  return anchorBlock.getEntityAt(index);
}

function getCurrentEntity(editorState) {
  var contentState = editorState.getCurrentContent();
  var entityKey = getCurrentEntityKey(editorState);

  if (entityKey) {
    return contentState.getEntity(entityKey);
  }

  return null;
}

function removeEntity() {
  var entityType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LINK';
  var editorState = arguments.length > 1 ? arguments[1] : undefined;
  var setEditorState = arguments.length > 2 ? arguments[2] : undefined;
  var selection = editorState.getSelection();

  if (!selection.isCollapsed()) {
    setEditorState(_draftJs.RichUtils.toggleLink(editorState, selection, null));
  }
}