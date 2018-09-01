"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colorModal = _interopRequireDefault(require("../modal/colorModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(type) {
  switch (type) {
    case 'color':
      return _colorModal.default;

    default:
      return undefined;
  }
};

exports.default = _default;