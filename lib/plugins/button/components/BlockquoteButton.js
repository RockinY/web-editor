"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createBlockStyleButton = _interopRequireDefault(require("../utils/createBlockStyleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createBlockStyleButton.default)({
  blockType: 'blockquote',
  icon: 'blockquote',
  inlineTipText: '引用',
  inlineTipLocation: 'top'
});

exports.default = _default;