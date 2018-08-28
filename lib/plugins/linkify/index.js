"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Link = _interopRequireDefault(require("./Link"));

var _linkStrategy = _interopRequireDefault(require("./linkStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    decorators: [{
      strategy: _linkStrategy.default,
      component: _Link.default
    }]
  };
};

exports.default = _default;