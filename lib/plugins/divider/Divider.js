"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 36px;\n  margin-bottom: 24px;\n  text-align: center;\n  border: 0;\n  overflow: visible;\n  height: 0;\n\n  &:before {\n    content: '...';\n    display: inline-block;\n    margin-left: .6em;\n    color: rgba(0,0,0,.68);\n    position: relative;\n    top: -30px;\n    letter-spacing: .6em;\n    font-size: 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Divider = _styledComponents.default.hr(_templateObject());

var _default = Divider;
exports.default = _default;