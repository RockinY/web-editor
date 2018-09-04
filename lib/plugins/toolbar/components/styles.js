"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popUpwards = exports.ToolbarWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    transform: matrix(.97,0,0,1,0,12);\n  }\n  20% {\n    opacity: 0.7;\n    transform: matrix(.99,0,0,1,0,2);\n  }\n  40% {\n    opacity: 1;\n    transform: matrix(1,0,0,1,0,-1);\n  }\n  70% {\n    opacity: 1;\n    transform: matrix(1,0,0,1,0,0);\n  }\n  100% {\n    opacity: 1;\n    transform: matrix(1,0,0,1,0,0);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  left: 50%;\n  transform: translate(-50%) scale(1);\n  position: absolute;\n  background-color: #57D9A3;\n  z-index: 6000;\n  box-sizing: border-box;\n\n  button,\n  button:hover {\n    color: #FFFFFF;\n  }\n\n  &:before {\n    content: '';\n    z-index: 6002;\n    border: 6px solid transparent;\n    line-height: 1;\n    user-select: none;\n    pointer-events: none;\n    position: absolute;\n    display: block;\n    text-transform: none;\n    bottom: calc(100% - 38px);\n    left: 50%;\n    transform: translateX(-50%);\n    border-bottom-width: 0;\n    border-top-color: #57D9A3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToolbarWrapper = _styledComponents.default.div(_templateObject(), function (p) {
  return p.show ? 'flex' : 'none';
});

exports.ToolbarWrapper = ToolbarWrapper;
var popUpwards = (0, _styledComponents.keyframes)(_templateObject2());
exports.popUpwards = popUpwards;