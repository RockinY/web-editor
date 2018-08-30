"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createInlineStyleButton = _interopRequireDefault(require("../utils/createInlineStyleButton"));

var _Button = require("../../../components/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createInlineStyleButton.default)({
  style: 'BOLD',
  Button: _react.default.createElement(_Button.IconButton, {
    glyph: "bold"
  })
});

exports.default = _default;