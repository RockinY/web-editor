"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderLanguageSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  opacity: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-family: sans-serif;\n  color: #ccc;\n  letter-spacing: 0.05em;\n  font-size: 12px;\n  padding: 0.3em;\n  cursor: pointer;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  text-align: right;\n  bottom: -28px;\n  right: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitcherContainer = _styledComponents.default.div(_templateObject());

var Switcher = _styledComponents.default.div(_templateObject2());

var SwitcherSelect = _styledComponents.default.select(_templateObject3());

var renderLanguageSelect = function renderLanguageSelect(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      selectedValue = _ref.selectedValue,
      selectedLabel = _ref.selectedLabel;
  return _react.default.createElement(SwitcherContainer, null, _react.default.createElement(Switcher, null, _react.default.createElement(SwitcherSelect, {
    value: selectedValue,
    onChange: onChange
  }, options.map(function (_ref2) {
    var label = _ref2.label,
        value = _ref2.value;
    return _react.default.createElement("option", {
      key: value,
      value: value
    }, label);
  })), _react.default.createElement("div", null, selectedLabel || '选择你的语言...', " ", String.fromCharCode(9662))));
};

exports.renderLanguageSelect = renderLanguageSelect;