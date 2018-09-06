"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Img = exports.ActiveOverlay = exports.ImageContainer = exports.blinkBorder = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      /* Pretend like there's a cursor next to the image when active */\n      box-shadow: inset -1px 0 0 #000;\n      animation: ", " 1s infinite;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", " max-width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(54, 179, 126, 0.1);\n  border: 1px solid #36B37E;\n  opacity: ", ";\n  transition: opacity 0.1s ease-in-out;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      overflow: hidden;\n      box-shadow: 0 4px 8px rgba(54, 179, 126, 0.2);\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  pointer-events: none;\n  ", " transition: all 0.1s ease-in-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n0% {\n  border-color: transparent;\n}\n49% {\n  border-color: transparent;\n}\n50% {\n  border-color: black;\n}\n100% {\n  border-color: black;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var blinkBorder = (0, _styledComponents.keyframes)(_templateObject());
exports.blinkBorder = blinkBorder;

var ImageContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject3());
});

exports.ImageContainer = ImageContainer;

var ActiveOverlay = _styledComponents.default.span(_templateObject4(), function (props) {
  return props.active ? 1 : 0;
});

exports.ActiveOverlay = ActiveOverlay;

var Img = _styledComponents.default.img(_templateObject5(), function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject6(), blinkBorder);
});

exports.Img = Img;