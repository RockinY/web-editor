"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addDivider = _interopRequireDefault(require("./addDivider"));

var _Divider = _interopRequireDefault(require("./Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDividerPlugin = function createDividerPlugin() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    blockRendererFn: function blockRendererFn(block, _ref) {
      var getEditorState = _ref.getEditorState;

      if (block.getType() === 'atomic') {
        var contentState = getEditorState().getCurrentContent();
        var entity = block.getEntityAt(0);
        if (!entity) return null;
        var type = contentState.getEntity(entity).getType();

        if (type === 'divider') {
          return {
            component: _Divider.default,
            editable: false
          };
        }
      }

      return null;
    },
    addDivider: _addDivider.default
  };
};

var _default = createDividerPlugin;
exports.default = _default;