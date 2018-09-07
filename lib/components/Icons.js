"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Glyph = exports.SvgWrapper = exports.InlineSvg = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  flex: 0 0 ", ";\n  width: ", ";\n  height: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  position: relative;\n  color:", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: inherit;\n  fill: currentColor;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InlineSvg = _styledComponents.default.svg(_templateObject());

exports.InlineSvg = InlineSvg;

var SvgWrapper = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.size ? "".concat(props.size, "px") : '32px';
}, function (props) {
  return props.size ? "".concat(props.size, "px") : '32px';
}, function (props) {
  return props.size ? "".concat(props.size, "px") : '32px';
}, function (props) {
  return props.size ? "".concat(props.size, "px") : '32px';
}, function (props) {
  return props.size ? "".concat(props.size, "px") : '32px';
}, function (props) {
  return props.color ? props.color : 'inherit';
}, function (props) {
  return props.tipText ? (0, _Tooltip.default)(props) : '';
});

exports.SvgWrapper = SvgWrapper;

var Glyph = function Glyph(_ref) {
  var glyph = _ref.glyph;

  switch (glyph) {
    case 'inserter':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M28,16c0,-10.5 -1.5,-12 -12,-12c-10.5,0 -12,1.5 -12,12c0,10.5 1.5,12 12,12c10.5,0 12,-1.5 12,-12Zm-14.89,4.482c-0.424,0.353 -0.482,0.984 -0.128,1.408c0.353,0.424 0.984,0.482 1.408,0.128l0.001,-0.001c0.26,-0.216 0.524,-0.433 0.79,-0.652c1.581,-1.299 3.235,-2.658 4.41,-4.311c0.219,-0.312 0.409,-0.664 0.409,-1.054c0,-0.39 -0.19,-0.742 -0.409,-1.053c-1.192,-1.679 -2.79,-2.988 -4.374,-4.285c-0.277,-0.226 -0.553,-0.452 -0.826,-0.68c-0.425,-0.353 -1.056,-0.296 -1.409,0.128c-0.354,0.424 -0.296,1.055 0.128,1.408c0.254,0.213 0.511,0.423 0.768,0.635c1.434,1.178 2.878,2.364 4.007,3.847c-1.109,1.457 -2.584,2.673 -4.009,3.847c-0.258,0.213 -0.514,0.424 -0.766,0.635Z"
      }));

    case 'photo':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M23.87,17.38v-7a1.12,1.12,0,0,0-1.12-1.12H9.25a1.13,1.13,0,0,0-1.13,1.12V21.43l9.52-5.7a3.39,3.39,0,0,1,3.48,0Zm0,2.62L20,17.65a1.14,1.14,0,0,0-1.13,0l-8.52,5.1H22.75a1.13,1.13,0,0,0,1.13-1.13h0ZM9.25,7h13.5a3.37,3.37,0,0,1,3.37,3.37h0V21.62A3.37,3.37,0,0,1,22.75,25H9.25a3.38,3.38,0,0,1-3.38-3.38h0V10.37A3.38,3.38,0,0,1,9.25,7Zm2.81,7.87a1.69,1.69,0,1,1,1.69-1.68,1.69,1.69,0,0,1-1.69,1.68Z"
      }));

    case 'bold':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M19.43,15.42A4.68,4.68,0,0,1,22,17.1a4.39,4.39,0,0,1,.84,2.67,5.24,5.24,0,0,1-.76,2.78,4.57,4.57,0,0,1-2.22,1.85A10,10,0,0,1,16,25H10.33a1.14,1.14,0,0,1-1.14-1.14h0V8.14A1.14,1.14,0,0,1,10.33,7h5.61c2.18,0,3.71.48,4.57,1.43a4.57,4.57,0,0,1,1.34,3.16,4,4,0,0,1-.61,2.18A4.71,4.71,0,0,1,19.43,15.42Zm-7.26-.88h3.32a12.89,12.89,0,0,0,2.06-.14A2.73,2.73,0,0,0,19,13.69a2.27,2.27,0,0,0,.63-1.79A2.55,2.55,0,0,0,19,10.06a2.7,2.7,0,0,0-1.51-.74,15.77,15.77,0,0,0-2.28-.14h-3a.57.57,0,0,0-.57.57h0V14a.57.57,0,0,0,.57.57Zm0,8.32h3.9A5.17,5.17,0,0,0,19.41,22a2.89,2.89,0,0,0,.94-2.28,2.83,2.83,0,0,0-1-2.29,5.83,5.83,0,0,0-3.58-.81h-3.6a.57.57,0,0,0-.57.57h0v5.06a.57.57,0,0,0,.57.58Z"
      }));

    case 'italic':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M16.16,9a.78.78,0,0,0-.17-.8,2.15,2.15,0,0,0-1.15-.37.43.43,0,0,1-.39-.4.48.48,0,0,1,0-.17V7c.55.06,1.08.1,1.61.12a12.16,12.16,0,0,0,1.48,0h1.38A9.47,9.47,0,0,0,20.47,7a2.81,2.81,0,0,1,0,.41.36.36,0,0,1-.3.41h-.08a2.58,2.58,0,0,0-1.24.38,1.33,1.33,0,0,0-.46.82L15.84,23a.73.73,0,0,0,.19.79,2.7,2.7,0,0,0,1.23.39.4.4,0,0,1,.36.41,1.55,1.55,0,0,1,0,.43c-.54-.06-1.1-.1-1.66-.12h-2.9a9.49,9.49,0,0,0-1.53.12,1.55,1.55,0,0,1,0-.43.35.35,0,0,1,.31-.39h0a3.16,3.16,0,0,0,1.24-.39,1.28,1.28,0,0,0,.49-.81Z"
      }));

    case 'underline':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M8.13,25a1.13,1.13,0,1,1,0-2.25H23.87a1.13,1.13,0,1,1,0,2.25ZM9.25,8.13a1.13,1.13,0,1,1,2.25,0v6.74a4.5,4.5,0,1,0,9,0h0V8.13a1.13,1.13,0,0,1,2.25,0h0v6.74a6.75,6.75,0,0,1-13.5,0Z"
      }));

    case 'blockquote':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M7.09,19.19a11.46,11.46,0,0,1,5.53-9.82,1.28,1.28,0,0,1,1.81,1.8,1.21,1.21,0,0,1-.26.2,1.59,1.59,0,0,1-.3.18,8.84,8.84,0,0,0-3.47,3.82h.45A3.81,3.81,0,1,1,7,19.18Zm10.16,0a11.44,11.44,0,0,1,5.54-9.8,1.27,1.27,0,0,1,1.8,1.8,1.06,1.06,0,0,1-.26.2,1.11,1.11,0,0,1-.3.17,9,9,0,0,0-3.46,3.81H21a3.82,3.82,0,1,1-3.81,3.82h.07Z"
      }));

    case 'code':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M13,15.55l1.5,1.35-3,2.69L10,18.25Zm4,4.05h5V17.8H17Zm9-9V21.4A3.81,3.81,0,0,1,22,25H10a3.81,3.81,0,0,1-4-3.6H6V10.6A3.81,3.81,0,0,1,10,7H22a3.81,3.81,0,0,1,4,3.6Zm-2,.9a2.86,2.86,0,0,0-3-2.7H11a2.86,2.86,0,0,0-3,2.7v9a2.86,2.86,0,0,0,3,2.7H21a2.86,2.86,0,0,0,3-2.7h0ZM10,12.85l3,2.7h0l1.5,1.35L16,15.55l-4.5-4Z"
      }));

    case 'colorize':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M10.78,8.29l1.62,2.89L6.22,17.29,14.27,25l6.66-6.43,2.38-.49L12.09,7Zm8,9h-9l4.49-4.43Zm4.49.79s-2.48,2.66-2.48,4a2.48,2.48,0,0,0,5,0C25.78,20.74,23.31,18.08,23.31,18.08Z"
      }));

    case 'bg':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M21.14,12.14h2.57V23.71H12.14V21.14h9Zm-10.28,9v3.22a.6.6,0,0,0,.64.64H24.36a.61.61,0,0,0,.64-.64V11.5a.6.6,0,0,0-.64-.64H21.14V7.64A.6.6,0,0,0,20.5,7H7.64A.61.61,0,0,0,7,7.64V20.5a.6.6,0,0,0,.64.64Z"
      }));

    case 'square':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M25,9.45v13.1A2.45,2.45,0,0,1,22.55,25H9.45A2.45,2.45,0,0,1,7,22.55H7V9.45A2.45,2.45,0,0,1,9.45,7h13.1A2.45,2.45,0,0,1,25,9.45Z"
      }));

    case 'embed':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M7,22.75H22.75a1.13,1.13,0,0,1,0,2.25H5.87a1.12,1.12,0,0,1-1.12-1.13h0V8.12A1.12,1.12,0,0,1,5.87,7H26.13a1.12,1.12,0,0,1,1.12,1.12h0V23.87a1.13,1.13,0,1,1-2.25,0V9.25H7Zm6.17-9.16a1.13,1.13,0,0,1,1.09-2l.07,0L20,15a1.12,1.12,0,0,1,.39,1.54A1.09,1.09,0,0,1,20,17l-5.62,3.38A1.13,1.13,0,0,1,12.78,20a1.26,1.26,0,0,1-.16-.58V16a1.13,1.13,0,0,1,2.26,0v1.39L17.19,16Z"
      }));

    case 'send-fill':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M2.45,25A.61.61,0,0,1,2,24.4c0-9.84,11.67-11.93,14.38-12.29V7.6a.61.61,0,0,1,.94-.5l12.48,8.4A.6.6,0,0,1,30,16a.63.63,0,0,1-.26.5L17.3,24.9a.6.6,0,0,1-.94-.51V19.54a44.52,44.52,0,0,0-4.94.26c-6.49.77-8.22,4.67-8.29,4.83h0a.61.61,0,0,1-.56.37Z"
      }));

    case 'three-dots':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M8.73,7H23.27a2.77,2.77,0,0,1,1.93.72A2.26,2.26,0,0,1,26,9.45v13.1a2.26,2.26,0,0,1-.8,1.73,2.77,2.77,0,0,1-1.93.72H8.73a2.77,2.77,0,0,1-1.93-.72A2.26,2.26,0,0,1,6,22.55V9.45a2.26,2.26,0,0,1,.8-1.73A2.77,2.77,0,0,1,8.73,7ZM23.27,8.64H8.73a1,1,0,0,0-.65.24.76.76,0,0,0-.26.57v13.1a.76.76,0,0,0,.26.57,1,1,0,0,0,.65.24H23.27a1,1,0,0,0,.65-.24.76.76,0,0,0,.26-.57V9.45a.76.76,0,0,0-.26-.57A1,1,0,0,0,23.27,8.64ZM12.36,15.18h7.28a.93.93,0,0,1,.64.24.76.76,0,0,1,0,1.16.93.93,0,0,1-.64.24H12.36a.93.93,0,0,1-.64-.24.76.76,0,0,1,0-1.16A.93.93,0,0,1,12.36,15.18Z"
      }));

    case 'link':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M11.56,25a4.62,4.62,0,0,1-3.19-7.86l2.39-2.39,1.59,1.59L10,18.73a2.26,2.26,0,1,0,3.19,3.19l3.19-3.19A2.22,2.22,0,0,0,17,17.14a2.76,2.76,0,0,0-.57-1.6L15.2,14.41l1.6-1.6,1.25,1.25a4.47,4.47,0,0,1,1.25,3.19,4.12,4.12,0,0,1-1.36,3.19l-3.19,3.19A4.32,4.32,0,0,1,11.56,25Zm3.64-5.81L14,18.05a4.54,4.54,0,0,1,0-6.49l3.19-3.19a4.59,4.59,0,0,1,6.49,6.49l-2.39,2.39-1.59-1.59L22,13.27a2.26,2.26,0,0,0-3.19-3.19l-3.31,3.07a2.21,2.21,0,0,0,0,3.19l1.26,1.25Z"
      }));

    case 'cancel':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M24.78,10.49,19.3,16l5.48,5.48a.6.6,0,0,1,0,.84l-2.49,2.49a.59.59,0,0,1-.83,0L16,19.35l-5.44,5.48a.59.59,0,0,1-.83,0l-2.5-2.49a.62.62,0,0,1,0-.84L12.66,16,7.21,10.58a.6.6,0,0,1,0-.83l2.5-2.49a.59.59,0,0,1,.83,0L16,12.69l5.49-5.52a.59.59,0,0,1,.83,0l2.5,2.49A.59.59,0,0,1,24.78,10.49Z"
      }));

    case 'ok':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M27.74,11.09a1.41,1.41,0,0,1-.42,1l-11,11-2.06,2.06a1.43,1.43,0,0,1-1,.42,1.4,1.4,0,0,1-1-.42l-2.06-2.06L4.68,17.6a1.4,1.4,0,0,1-.42-1,1.41,1.41,0,0,1,.42-1l2.06-2.06a1.41,1.41,0,0,1,1-.42,1.4,1.4,0,0,1,1,.42L13.26,18,23.2,8a1.37,1.37,0,0,1,1-.43,1.4,1.4,0,0,1,1,.43l2.06,2.06A1.4,1.4,0,0,1,27.74,11.09Z"
      }));
  }
};

exports.Glyph = Glyph;

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 32 : _this$props$size,
          tipText = _this$props.tipText,
          tipLocation = _this$props.tipLocation,
          onboarding = _this$props.onboarding,
          count = _this$props.count,
          onClick = _this$props.onClick,
          glyph = _this$props.glyph,
          color = _this$props.color;
      return _react.default.createElement(SvgWrapper, {
        size: size,
        tipText: tipText,
        tipLocation: tipLocation,
        onboarding: onboarding,
        count: count,
        className: 'icon',
        onClick: onClick,
        color: color
      }, _react.default.createElement(InlineSvg, {
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "1.414",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": "title",
        viewBox: "0 0 32 32",
        preserveAspectRatio: "xMidYMid meet",
        fit: true,
        id: glyph
      }, _react.default.createElement(Glyph, {
        glyph: glyph
      })));
    }
  }]);

  return Icon;
}(_react.default.Component);

var _default = Icon;
exports.default = _default;