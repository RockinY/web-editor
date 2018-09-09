"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEntryComponent = function defaultEntryComponent(props) {
  var mention = props.mention;
  return _react.default.createElement(_styles.EntryWrapper, null, _react.default.createElement(_styles.Avatar, {
    src: mention.avatar,
    role: "presentation"
  }), _react.default.createElement(_styles.EntryText, null, mention.name));
};

var _default = defaultEntryComponent;
exports.default = _default;