"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _draftJsCode = _interopRequireDefault(require("draft-js-code"));

var _draftJs = require("draft-js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCodeEditorPlugin = function createCodeEditorPlugin(options) {
  return {
    handleKeyCommand: function handleKeyCommand(command, editorState, _ref) {
      var setEditorState = _ref.setEditorState;
      var newState;

      if (_draftJsCode.default.hasSelectionInBlock(editorState)) {
        newState = _draftJsCode.default.handleKeyCommand(editorState, command);
      } else {
        newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      }

      if (newState) {
        setEditorState(newState);
        return 'handled';
      }

      return 'not-handled';
    },
    keyBindingFn: function keyBindingFn(evt, _ref2) {
      var getEditorState = _ref2.getEditorState,
          setEditorState = _ref2.setEditorState;
      var editorState = getEditorState();
      if (!_draftJsCode.default.hasSelectionInBlock(editorState)) return;
      return _draftJsCode.default.getKeyBinding(evt);
    },
    handleReturn: function handleReturn(evt, editorState, _ref3) {
      var setEditorState = _ref3.setEditorState;
      if (!_draftJsCode.default.hasSelectionInBlock(editorState)) return 'not-handled';
      setEditorState(_draftJsCode.default.handleReturn(evt, editorState));
      return 'handled';
    },
    onTab: function onTab(evt, _ref4) {
      var getEditorState = _ref4.getEditorState,
          setEditorState = _ref4.setEditorState;
      var editorState = getEditorState();
      if (!_draftJsCode.default.hasSelectionInBlock(editorState)) return 'not-handled';
      setEditorState(_draftJsCode.default.onTab(evt, editorState));
      return 'handled';
    }
  };
};

var _default = createCodeEditorPlugin;
exports.default = _default;