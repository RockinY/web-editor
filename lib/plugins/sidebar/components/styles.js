"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedInput = exports.EmbedContainer = exports.MediaLabel = exports.MediaInput = exports.Expander = exports.Action = exports.SidebarWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  height: 32px;\n  width: 200px;\n  font-size: 16px;\n  color: #A3AFBF;\n  border-bottom: 1px solid #A3AFBF;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  height: 32px;\n  display: flex;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  outline: 0;\n  display: inline-block;\n  background: transparent;\n  transition: color 0.3s ease-out;\n  color: #A3AFBF;\n  height: 32px;\n  width: 32px;\n\n  &:hover {\n    cursor: pointer;\n    color: #57D9A3;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        transform: scale(1);\n        transition: transform 0.2s;\n        width: 32px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 4px;\n\n  button > div {\n    color: #A3AFBF;\n  }\n\n  button:hover > div {\n    color: #57D9A3;\n  }\n  \n  > button:first-of-type {\n    margin-right: 10px;\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 0 0 32px;\n  flex-direction: column;\n  height: 32px;\n  max-height: 32px;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  transform: scale(0);\n  width: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inherit;\n  transform: scale(", ");\n  opacity: ", ";\n  transition: transform 0.1s;\n  position: fixed;\n  margin-top: -8px;\n  z-index: 2000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.show ? '1' : '0';
}, function (props) {
  return props.show ? 1 : 0;
});

exports.SidebarWrapper = SidebarWrapper;

var Action = _styledComponents.default.div(_templateObject2());

exports.Action = Action;

var Expander = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.inserting && (0, _styledComponents.css)(_templateObject4(), Action);
});

exports.Expander = Expander;

var MediaInput = _styledComponents.default.input(_templateObject5());

exports.MediaInput = MediaInput;

var MediaLabel = _styledComponents.default.label(_templateObject6());

exports.MediaLabel = MediaLabel;

var EmbedContainer = _styledComponents.default.div(_templateObject7());

exports.EmbedContainer = EmbedContainer;

var EmbedInput = _styledComponents.default.input(_templateObject8());

exports.EmbedInput = EmbedInput;