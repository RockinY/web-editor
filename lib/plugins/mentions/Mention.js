"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mention = function Mention(props) {
  var entityKey = props.entityKey,
      contentState = props.contentState,
      children = props.children;
  var mention = contentState.getEntity(entityKey).getData().mention;
  return _react.default.createElement(_styles.MentionLink, {
    target: "_blank",
    href: mention.link
  }, children);
};

var _default = Mention;
exports.default = _default;