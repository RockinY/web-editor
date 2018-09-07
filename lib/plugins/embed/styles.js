"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedComponent = exports.EmbedContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0; \n  left: 0;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: center;\n  padding-bottom: 56.25%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EmbedContainer = _styledComponents.default.div(_templateObject());

exports.EmbedContainer = EmbedContainer;

var EmbedComponent = _styledComponents.default.iframe(_templateObject2());

exports.EmbedComponent = EmbedComponent;