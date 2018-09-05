"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _Icons = _interopRequireDefault(require("../../../components/Icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var onChange = _ref.onChange,
      _ref$accept = _ref.accept,
      accept = _ref$accept === void 0 ? '.png, .jpg, .jpeg, .gif, .mp4' : _ref$accept,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      tipLocation = _ref.tipLocation;
  return _react.default.createElement(_styles.MediaLabel, null, _react.default.createElement(_styles.MediaInput, {
    type: "file",
    accept: accept,
    multiple: multiple,
    onChange: onChange
  }), _react.default.createElement(_Icons.default, {
    glyph: "photo",
    tipLocation: tipLocation ? tipLocation : 'top-right',
    tipText: "\u4E0A\u4F20\u56FE\u7247"
  }));
};

exports.default = _default;