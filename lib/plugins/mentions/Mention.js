"use strict";

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mention = function Mention(props) {
  var _this$props = _this.props,
      entityKey = _this$props.entityKey,
      contentState = _this$props.contentState,
      children = _this$props.children;
  var mention = contentState.getEntity(entityKey).getData().mention;
  return _react.default.createElement(_styles.MentionLink, {
    target: "_blank",
    href: mention.link
  }, children);
};