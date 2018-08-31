"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  left: 50%;\n  transform: translate(-50%) scale(1);\n  position: absolute;\n  padding: 4px;\n  background-color: #57D9A3;\n  border-radius: 12px;\n  z-index: 6000;\n  box-sizing: border-box;\n\n  button,\n  button:hover {\n    color: #FFFFFF;\n  }\n"]);

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