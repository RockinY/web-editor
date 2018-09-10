"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuggestionWrapper = exports.EntryWrapper = exports.EntryText = exports.Avatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 5px 0;\n  margin-top: 5px;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  background: #36B37E;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 5px 5px;\n  width: 150px;\n  background: ", ";\n\n  &:hover {\n    background: #172B4D;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #FFF;\n  font-size: 16px;\n  white-space: nowrap; \n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 116px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin-right: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Avatar = _styledComponents.default.img(_templateObject());

exports.Avatar = Avatar;

var EntryText = _styledComponents.default.span(_templateObject2());

exports.EntryText = EntryText;

var EntryWrapper = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.isFocused ? '#172B4D' : '#36B37E';
});

exports.EntryWrapper = EntryWrapper;

var SuggestionWrapper = _styledComponents.default.div(_templateObject4());

exports.SuggestionWrapper = SuggestionWrapper;