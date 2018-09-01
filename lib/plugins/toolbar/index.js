"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createStore = _interopRequireDefault(require("../createStore"));

var _decorateComponentWithProps = _interopRequireDefault(require("decorate-component-with-props"));

var _Toolbar = _interopRequireDefault(require("./components/Toolbar"));

var _getModalByType = _interopRequireDefault(require("./getModalByType"));

var _button = require("../button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = (0, _createStore.default)({
    isVisible: false
  });
  var _config$structure = config.structure,
      structure = _config$structure === void 0 ? [_button.BoldButton, _button.ItalicButton, _button.UnderlineButton, _button.BlockCodeButton, _button.BlockquoteButton, _button.TextColorButton] : _config$structure;
  var toolbarProps = {
    store: store,
    structure: structure,
    getModalByType: _getModalByType.default
  };
  return {
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    onChange: function onChange(editorState) {
      var selection = editorState.getSelection();

      if (selection.getHasFocus() && !selection.isCollapsed()) {
        store.updateItem('isVisible', true);
      } else {
        store.updateItem('isVisible', false);
      }

      return editorState;
    },
    Toolbar: (0, _decorateComponentWithProps.default)(_Toolbar.default, toolbarProps)
  };
};

exports.default = _default;