"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createStore = _interopRequireDefault(require("../createStore"));

var _decorateComponentWithProps = _interopRequireDefault(require("decorate-component-with-props"));

var _Sidebar = _interopRequireDefault(require("./components/Sidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = (0, _createStore.default)({
    isVisible: false
  });
  return {
    initialize: function initialize(_ref) {
      var setEditorState = _ref.setEditorState,
          getEditorState = _ref.getEditorState,
          getEditorRef = _ref.getEditorRef;
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('getEditorRef', getEditorRef);
    },
    // Re-Render the sidebar on every change
    onChange: function onChange(editorState) {
      store.updateItem('editorState', editorState);
      return editorState;
    },
    Sidebar: (0, _decorateComponentWithProps.default)(_Sidebar.default, {
      store: store
    })
  };
};

exports.default = _default;