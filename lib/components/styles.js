"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveOverlay = exports.ImageContainer = exports.blinkBorder = exports.StyledIconButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      /* Pretend like there's a cursor next to the image when active */\n      box-shadow: inset -1px 0 0 #000;\n      animation: ", " 1s infinite;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", " max-width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(54, 179, 126, 0.1);\n  border-radius: 8px;\n  border: 1px solid #36B37E;\n  opacity: ", ";\n  transition: opacity 0.1s ease-in-out;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 8px;\n      overflow: hidden;\n      box-shadow: 0 4px 8px rgba(54, 179, 126, 0.2);\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 12px 0;\n  pointer-events: none;\n  ", " transition: all 0.1s ease-in-out;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n0% {\n  border-color: transparent;\n}\n49% {\n  border-color: transparent;\n}\n50% {\n  border-color: black;\n}\n100% {\n  border-color: black;\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", " padding: 0;\n  width: 32px;\n  height: 32px;\n  background-color: transparent;\n  color: ", ";\n  opacity: ", ";\n\n  &:hover {\n    color: ", ";\n    box-shadow: none;\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: none;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 0;\n  outline: 0;\n  font-weight: 600;\n  white-space: nowrap;\n  word-space: keep-all;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n  font-size: ", ";\n  line-height: 1;\n  position: relative;\n  text-align: center;\n  padding: ", ";\n  \n  &:hover {\n    transition: all 0.2s ease-in;\n    box-shadow: ", ";\n    opacity: ", ";\n  }\n\n  /* if an icon and label are both present, add space around the label*/\n  div + span,\n  span + span {\n    margin: 0 8px;\n  }\n"]);

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
}, function (props) {
  return props.disabled ? 'none' : "0 8px 16px rgba(23, 43, 77, 0.15)";
}, function (props) {
  return props.disabled ? '0.5' : '1';
});

var StyledIconButton = _styledComponents.default.button(_templateObject2(), baseButton, function (props) {
  return props.disabled ? '#DFE7EF' : '#828C99';
}, function (props) {
  return props.opacity ? props.opacity : 1;
}, function (props) {
  return props.disabled ? '#DFE7EF' : '#57D9A3';
});

exports.StyledIconButton = StyledIconButton;
var blinkBorder = (0, _styledComponents.keyframes)(_templateObject3());
exports.blinkBorder = blinkBorder;

var ImageContainer = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject5());
});

exports.ImageContainer = ImageContainer;

var ActiveOverlay = _styledComponents.default.span(_templateObject6(), function (props) {
  return props.active ? 1 : 0;
});

exports.ActiveOverlay = ActiveOverlay;

var Img = _styledComponents.default.img(_templateObject7(), function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject8(), blinkBorder);
});