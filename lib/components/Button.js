"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icons = _interopRequireDefault(require("./Icons"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconButton = function IconButton(props) {
  return _react.default.createElement(_styles.StyledIconButton, _extends({
    disabled: props.loading
  }, props), _react.default.createElement(_Icons.default, {
    glyph: props.glyph,
    tipText: props.tipText,
    tipLocation: props.tipLocation,
    size: props.size
  }));
};

exports.IconButton = IconButton;