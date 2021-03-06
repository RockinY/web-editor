"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _Button = require("../../../components/Button");

var _styles = require("../styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var style = _ref.style,
      icon = _ref.icon,
      inlineTipText = _ref.inlineTipText,
      inlineTipLocation = _ref.inlineTipLocation;
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(InlineStyleButton, _Component);

      function InlineStyleButton() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, InlineStyleButton);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InlineStyleButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleStyle", function (event) {
          event.preventDefault();

          _this.props.setEditorState(_draftJs.RichUtils.toggleInlineStyle(_this.props.getEditorState(), style));
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preventBubblingUp", function (event) {
          event.preventDefault();
        });

        return _this;
      }

      _createClass(InlineStyleButton, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              size = _this$props.size,
              tipText = _this$props.tipText,
              tipLocation = _this$props.tipLocation;
          return _react.default.createElement(_styles.ButtonWrapper, {
            onMouseDown: this.preventBubblingUp
          }, _react.default.createElement(_Button.IconButton, {
            onClick: this.toggleStyle,
            glyph: icon,
            size: size || 24,
            tipText: tipText || inlineTipText,
            tipLocation: tipLocation || inlineTipLocation || 'top'
          }));
        }
      }]);

      return InlineStyleButton;
    }(_react.Component)
  );
};

exports.default = _default;