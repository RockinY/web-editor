"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createModalButton = _interopRequireDefault(require("../utils/createModalButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createModalButton.default)({
  type: 'link',
  icon: 'link',
  inlineTipText: '链接',
  inlineTipLocation: 'top'
});

exports.default = _default;