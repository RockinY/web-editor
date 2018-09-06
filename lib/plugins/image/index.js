"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addImage = _interopRequireDefault(require("./addImage"));

var _Image = _interopRequireDefault(require("./Image"));

var _decorateComponentWithProps = _interopRequireDefault(require("decorate-component-with-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return {
    blockRendererFn: function blockRendererFn(block, _ref) {
      var getEditorState = _ref.getEditorState;

      if (block.getType() === 'atomic') {
        var editorState = getEditorState();
        var contentState = editorState.getCurrentContent();
        var entity = block.getEntityAt(0);
        if (!entity) return null;
        var type = contentState.getEntity(entity).getType();

        if (type === 'IMAGE' || type === 'image') {
          var blockKey = block.getKey();
          var currentSelection = editorState.getSelection();
          var focusKey = currentSelection.getFocusKey();
          var active = blockKey === focusKey;
          return {
            component: (0, _decorateComponentWithProps.default)(_Image.default, {
              active: active
            }),
            editable: false
          };
        }

        return null;
      }

      return null;
    },
    addImage: _addImage.default
  };
};

exports.default = _default;