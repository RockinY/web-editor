"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

require("css.escape");

var _theme = require("../theme");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  &:after,\n  &:before {\n    line-height: 1;\n    user-select: none;\n    pointer-events: none;\n    position: absolute;\n    opacity: 0;\n    display: block;\n    text-transform: none;\n  }\n\n  &:before {\n    content: '';\n    z-index: 6002;\n    border: 6px solid transparent;\n  }\n\n  &:after {\n    content: ", ";\n    z-index: 6001;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Segoe', sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    min-width: 8px;\n    max-width: 21em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 8px 12px;\n    border-radius: 8px;\n    box-shadow: 0 4px 12px rgba(23, 43, 77, 0.25);\n    background: ", ";\n    color: ", ";\n  }\n\n  ", ";\n\n  &:hover:after,\n  &:hover:before {\n    opacity: 1;\n    transition: opacity 0.1s ease-in 0.1s;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var returnTooltip = function returnTooltip(props) {
  switch (props.tipLocation) {
    case 'top-left':
      return "\n          &:after {\n            bottom: calc(100% + 4px);\n            right: 0;\n          }\n          &:before {\n            bottom: 100%;\n            right: 0;\n            transform: translateX(-100%);\n            border-bottom-width: 0;\n            border-top-color: ".concat(_theme.colors.dark, ";\n          }\n      ");

    case 'top-right':
      return "\n          &:after {\n            bottom: calc(100% + 4px);\n            left: 0;\n          }\n          &:before {\n            bottom: 100%;\n            left: 0;\n            transform: translateX(100%);\n            border-bottom-width: 0;\n            border-top-color: ".concat(_theme.colors.dark, ";\n          }\n      ");

    case 'top':
      return "\n          &:after {\n            bottom: calc(100% + 8px);\n            left: 50%;\n            transform: translateX(-50%);\n          }\n          &:before {\n            bottom: calc(100% + 3px);\n            left: 50%;\n            transform: translateX(-50%);\n            border-bottom-width: 0;\n            border-top-color: ".concat(_theme.colors.dark, ";\n          }\n      ");

    case 'right':
    default:
      return "\n          &:after {\n            top: 50%;\n            left: calc(100% + 4px);\n            transform: translateY(-50%);\n          }\n          &:before{\n            top: calc(50% - 5px);\n            left: 100%;\n            border-left-width: 0;\n            border-right-color: ".concat(_theme.colors.dark, ";\n          }\n      ");

    case 'bottom-left':
      return "\n          &:after {\n            top: calc(100% + 4px);\n            right: 0;\n          }\n          &:before {\n            top: 100%;\n            right: 0;\n            transform: translateX(-100%);\n            border-top-width: 0;\n            border-bottom-color: ".concat(_theme.colors.dark, ";\n          }\n      ");

    case 'bottom-right':
      return "\n          &:after {\n            top: calc(100% + 4px);\n            left: 0;\n          }\n          &:before {\n            top: 100%;\n            left: 0;\n            transform: translateX(100%);\n            border-top-width: 0;\n            border-bottom-color: ".concat(_theme.colors.dark, ";\n          }\n      ");

    case 'bottom':
      return "\n        &:after {\n          top: calc(100% + 8px);\n          left: 50%;\n          transform: translateX(-50%);\n        }\n        &:before {\n          top: calc(100% + 3px);\n          left: 50%;\n          transform: translateX(-50%);\n          border-top-width: 0;\n          border-bottom-color: ".concat(_theme.colors.dark, ";\n        }\n      ");

    case 'left':
      return "\n          &:after {\n            right: calc(100% + 4px);\n            top: 50%;\n            transform: translateY(-50%);\n          }\n          &:before{\n            right: 100%;\n            top: calc(50% - 5px);\n            border-right-width: 0;\n            border-left-color: ".concat(_theme.colors.dark, ";\n          }\n      ");
  }
};

var _default = function _default(props) {
  return (0, _styledComponents.css)(_templateObject(), props.tipText ? "'".concat(CSS.escape(props.tipText), "'") : "''", _theme.colors.dark, _theme.colors.reverse, props.tipText ? returnTooltip(props) : '');
};

exports.default = _default;