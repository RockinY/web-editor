"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addEmbed = _interopRequireDefault(require("./addEmbed"));

var _Embed = _interopRequireDefault(require("./Embed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    blockRendererFn: function blockRendererFn(block, _ref) {
      var getEditorState = _ref.getEditorState;

      if (block.getType() === 'atomic') {
        var contentState = getEditorState().getCurrentContent();
        var entity = block.getEntityAt(0);

        if (entity) {
          return null;
        }

        var type = contentState.getEntity(entity).getType();

        if (type === 'embed') {
          return {
            component: _Embed.default,
            editable: false
          };
        }
      }
    },
    addEmbed: _addEmbed.default
  };
};

exports.default = _default;