"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addImage = _interopRequireDefault(require("./addImage"));

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Image = config.imageComponent || _Image.default;

  if (config.decorator) {
    Image = config.decorator(Image);
  }

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
          return {
            component: Image,
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