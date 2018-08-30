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
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  flex: 0 0 ", ";\n  width: ", ";\n  height: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  position: relative;\n  color: inherit;\n\n  ", ";\n"]);

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

    case 'embed':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M16,6.033c5.1,0 7.247,0.576 8.336,1.665c1.089,1.089 1.664,3.235 1.664,8.335c0,5.1 -0.575,7.247 -1.664,8.336c-1.089,1.089 -3.236,1.664 -8.336,1.664c-5.1,0 -7.247,-0.575 -8.336,-1.664c-1.089,-1.089 -1.664,-3.236 -1.664,-8.336c0,-5.1 0.575,-7.247 1.664,-8.335c1.089,-1.089 3.236,-1.665 8.336,-1.665Zm12,10c0,-10 -2,-12 -12,-12c-10,0 -12,2 -12,12c0,10 2,12 12,12c10,0 12,-2 12,-12Zm-19.25,0c0,0.336 0.175,0.617 0.332,0.825l0.001,0.002c0.836,1.087 2.004,1.978 3.102,2.816c0.09,0.068 0.179,0.137 0.268,0.205l0.079,0.06c0.061,0.047 0.122,0.094 0.183,0.141l0.001,0.001c0.394,0.305 0.977,0.258 1.31,-0.113c0.343,-0.382 0.284,-0.953 -0.121,-1.266c-0.178,-0.138 -0.359,-0.276 -0.54,-0.415c-0.92,-0.703 -1.854,-1.417 -2.579,-2.256c0.734,-0.851 1.651,-1.55 2.576,-2.255c0.181,-0.138 0.363,-0.276 0.543,-0.415c0.404,-0.313 0.464,-0.884 0.121,-1.266c-0.333,-0.372 -0.917,-0.417 -1.31,-0.113c-0.181,0.139 -0.363,0.278 -0.546,0.418l-0.01,0.007c-1.099,0.836 -2.228,1.695 -3.077,2.798l-0.001,0.001c-0.157,0.208 -0.332,0.49 -0.332,0.825Zm14.5,0c0,0.336 -0.175,0.617 -0.332,0.825l-0.001,0.002c-0.836,1.087 -2.004,1.978 -3.102,2.816c-0.179,0.136 -0.356,0.272 -0.53,0.406l-0.001,0.001c-0.394,0.305 -0.977,0.258 -1.31,-0.113c-0.343,-0.382 -0.284,-0.953 0.121,-1.266c0.178,-0.138 0.359,-0.276 0.54,-0.415c0.92,-0.703 1.854,-1.417 2.579,-2.256c-0.734,-0.851 -1.651,-1.55 -2.576,-2.255l-0.002,-0.001c-0.18,-0.137 -0.361,-0.275 -0.541,-0.414c-0.404,-0.313 -0.464,-0.884 -0.121,-1.266c0.333,-0.372 0.917,-0.417 1.31,-0.113c0.184,0.142 0.369,0.283 0.556,0.425c1.099,0.836 2.228,1.695 3.077,2.798l0.001,0.001c0.157,0.208 0.332,0.49 0.332,0.825Z"
      }));

    case 'photo':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M25.698,22.196c0.248,-1.511 0.302,-3.475 0.302,-6.196c0,-2.716 -0.063,-4.673 -0.324,-6.181c-0.245,-1.442 -0.619,-2.125 -1.019,-2.521c-0.403,-0.397 -1.093,-0.761 -2.534,-0.996c-1.502,-0.249 -3.445,-0.302 -6.123,-0.302c-2.678,0 -4.621,0.053 -6.123,0.302c-1.441,0.235 -2.131,0.599 -2.534,0.996c-0.4,0.396 -0.774,1.079 -1.019,2.521c-0.261,1.508 -0.324,3.465 -0.324,6.181c0,2.721 0.053,4.685 0.302,6.196c0.235,1.45 0.6,2.127 0.987,2.515c0.388,0.387 1.065,0.752 2.515,0.987c1.511,0.249 3.475,0.302 6.196,0.302c2.721,0 4.685,-0.053 6.196,-0.302c1.45,-0.235 2.127,-0.6 2.515,-0.987c0.387,-0.388 0.752,-1.065 0.987,-2.515Zm-9.698,5.804c11,0 12,-1 12,-12c0,-11 -1.169,-12 -12,-12c-10.831,0 -12,1 -12,12c0,11 1,12 12,12Z"
      }), _react.default.createElement("path", {
        d: "M8.556,20.674c-0.706,-0.103 -1.385,0.459 -1.28,1.164c0.06,0.406 0.379,0.72 0.784,0.784c1.958,0.308 4.539,0.378 7.94,0.378c3.4,0 5.982,-0.07 7.939,-0.378c0.406,-0.064 0.724,-0.378 0.785,-0.784c0.105,-0.705 -0.574,-1.267 -1.28,-1.164c-0.038,0.006 -0.077,0.011 -0.116,0.017c-0.001,0 -0.002,0 -0.002,0c-1.802,0.253 -4.143,0.309 -7.326,0.309c0,0 0,0 0,0c-3.183,0 -5.524,-0.056 -7.326,-0.309c0,0 -0.001,0 -0.002,0c-0.039,-0.006 -0.078,-0.011 -0.116,-0.017Z"
      }), _react.default.createElement("path", {
        d: "M11.722,10.034c-0.808,-0.186 -1.612,0.319 -1.798,1.126c-0.045,0.195 -0.049,0.39 -0.019,0.576c0.05,0.307 -0.056,0.664 -0.323,0.825c-0.107,0.065 -0.212,0.133 -0.316,0.204c-0.465,0.319 -1.106,0.201 -1.256,-0.343c-0.149,-0.54 -0.169,-1.125 -0.035,-1.71c0.433,-1.884 2.311,-3.06 4.194,-2.627c1.884,0.432 3.061,2.31 2.628,4.194c-0.055,0.241 -0.134,0.471 -0.234,0.687c-0.268,0.58 -1.007,0.479 -1.431,0.001c-0.052,-0.06 -0.107,-0.118 -0.164,-0.174c-0.208,-0.207 -0.25,-0.546 -0.158,-0.825c0.015,-0.044 0.027,-0.09 0.038,-0.136c0.185,-0.808 -0.319,-1.613 -1.126,-1.798Zm1.5,7.742c0.407,0.341 1.013,0.286 1.352,-0.124c0.251,-0.296 0.501,-0.6 0.752,-0.905l0.001,0c1.088,-1.32 2.208,-2.677 3.551,-3.705c1.424,1.09 2.563,2.484 3.694,3.868l0.001,0.001c0.203,0.248 0.405,0.495 0.609,0.741c0.339,0.41 0.945,0.465 1.352,0.124c0.403,-0.338 0.457,-0.957 0.122,-1.361c-0.216,-0.26 -0.432,-0.524 -0.651,-0.791l-0.007,-0.009c-1.239,-1.514 -2.533,-3.095 -4.108,-4.221c-0.299,-0.211 -0.637,-0.394 -1.012,-0.394c-0.375,0 -0.713,0.183 -1.012,0.394c-1.581,1.13 -2.909,2.754 -4.163,4.287l0,0c-0.203,0.248 -0.405,0.494 -0.604,0.735c-0.34,0.41 -0.285,1.018 0.123,1.36Zm-0.421,-2.606c0.275,-0.312 0.271,-0.778 -0.024,-1.072c-0.231,-0.23 -0.483,-0.464 -0.763,-0.704c-0.299,-0.211 -0.637,-0.394 -1.012,-0.394c-0.375,0 -0.728,0.171 -1.012,0.394c-1.441,1.135 -1.99,2.084 -2.767,3.022c-0.34,0.41 -0.285,1.018 0.123,1.36c0.407,0.341 1.013,0.286 1.352,-0.124c0.802,-1.152 1.292,-1.652 2.304,-2.61c0.089,0.084 0.173,0.165 0.254,0.242c0.42,0.401 1.161,0.321 1.545,-0.114Z"
      }));

    case 'bold':
      return _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M24.1,5a7.87,7.87,0,0,1,1.12,4.28,6.9,6.9,0,0,1-1.12,4.12A6,6,0,0,1,22.24,15a5.63,5.63,0,0,1,2.81,2.47A8.33,8.33,0,0,1,26,21.55,9.14,9.14,0,0,1,24.92,26a7.44,7.44,0,0,1-1.73,2.2,6.37,6.37,0,0,1-2.76,1.41A14.33,14.33,0,0,1,17,30H6V2H17.78q4.47.07,6.32,3ZM10.86,6.86V13h5.93a4.35,4.35,0,0,0,2.58-.7,2.79,2.79,0,0,0,1-2.46A2.58,2.58,0,0,0,19.05,7.3a8.07,8.07,0,0,0-2.88-.44Zm0,10.81v7.47h5.92a5.09,5.09,0,0,0,2.47-.5c1.07-.61,1.6-1.77,1.6-3.49a3.06,3.06,0,0,0-1.55-3,5.33,5.33,0,0,0-2.43-.48Z"
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
          glyph = _this$props.glyph;
      return _react.default.createElement(SvgWrapper, {
        size: size,
        tipText: tipText,
        tipLocation: tipLocation,
        onboarding: onboarding,
        count: count,
        className: 'icon',
        onClick: onClick
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
      }, _react.default.createElement("title", {
        id: "title"
      }, glyph), _react.default.createElement(Glyph, {
        glyph: glyph
      })));
    }
  }]);

  return Icon;
}(_react.default.Component);

var _default = Icon;
exports.default = _default;