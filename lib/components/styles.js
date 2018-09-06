"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIconButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("../theme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", " padding: 0;\n  width: 32px;\n  height: 32px;\n  background-color: transparent;\n  color: colors.reverse;\n  opacity: ", ";\n\n  &:hover {\n    color: colors.reverse;\n    box-shadow: none;\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: none;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 0;\n  outline: 0;\n  font-weight: 600;\n  white-space: nowrap;\n  word-space: keep-all;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n  font-size: ", ";\n  line-height: 1;\n  position: relative;\n  text-align: center;\n  padding: ", ";\n\n  /* if an icon and label are both present, add space around the label*/\n  div + span,\n  span + span {\n    margin: 0 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseButton = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.large ? '18px' : '14px';
}, function (props) {
  return props.icon ? props.large ? '8px 12px' : '4px 8px' : props.large ? '16px 32px' : '12px 16px';
});

var StyledIconButton = _styledComponents.default.button(_templateObject2(), baseButton, function (props) {
  return props.opacity ? props.opacity : 1;
});

exports.StyledIconButton = StyledIconButton;