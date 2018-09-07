"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  caret-color: #FFF;\n  background: #57D9A3;\n  color: #FFF;\n  font-size: 12px;\n  padding: 0 5px;\n\n  &::placeholder {\n    color: #FFF;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkInput = _styledComponents.default.input(_templateObject());

exports.LinkInput = LinkInput;