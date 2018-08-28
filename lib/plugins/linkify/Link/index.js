"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _unionClassNames = _interopRequireDefault(require("union-class-names"));

var _linkifyIt = _interopRequireDefault(require("linkify-it"));

var _tlds = _interopRequireDefault(require("tlds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var linkify = (0, _linkifyIt.default)();
linkify.tlds(_tlds.default); // The component we render when we encounter a hyperlink in the text

var Link =
/*#__PURE__*/
function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _getPrototypeOf(Link).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$decorated = _this$props.decoratedText,
          decoratedText = _this$props$decorated === void 0 ? '' : _this$props$decorated,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          _this$props$target = _this$props.target,
          target = _this$props$target === void 0 ? '_self' : _this$props$target,
          _this$props$rel = _this$props.rel,
          rel = _this$props$rel === void 0 ? 'noreferrer noopener' : _this$props$rel,
          className = _this$props.className,
          component = _this$props.component,
          dir = _this$props.dir,
          entityKey = _this$props.entityKey,
          getEditorState = _this$props.getEditorState,
          offsetKey = _this$props.offsetKey,
          setEditorState = _this$props.setEditorState,
          contentState = _this$props.contentState,
          otherProps = _objectWithoutProperties(_this$props, ["decoratedText", "theme", "target", "rel", "className", "component", "dir", "entityKey", "getEditorState", "offsetKey", "setEditorState", "contentState"]);

      var combinedClassName = (0, _unionClassNames.default)(theme.link, className);
      var links = linkify.match(decoratedText);
      var href = links && links[0] ? links[0].url : '';

      var props = _objectSpread({}, otherProps, {
        href: href,
        target: target,
        rel: rel,
        className: combinedClassName
      });

      return component ? _react.default.createElement(component, props) : _react.default.createElement("a", props); // eslint-disable-line jsx-a11y/anchor-has-content
    }
  }]);

  return Link;
}(_react.Component);

exports.default = Link;