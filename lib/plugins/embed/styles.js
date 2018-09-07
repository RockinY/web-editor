"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedComponent = exports.AspectRatio = exports.EmbedContainer = void 0;

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EmbedContainer = styled.div(_templateObject());
exports.EmbedContainer = EmbedContainer;
var AspectRatio = styled(EmbedContainer)(_templateObject2(), function (props) {
  return props.ratio ? props.ratio : '0';
});
exports.AspectRatio = AspectRatio;
var EmbedComponent = styled.iframe(_templateObject3());
exports.EmbedComponent = EmbedComponent;