"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _entity = require("./entity");

var _linkifyIt = _interopRequireDefault(require("linkify-it"));

var _tlds = _interopRequireDefault(require("tlds"));

var _styles = require("../toolbar/components/styles");

var _styles2 = require("./styles");

var _Button = require("../../components/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var linkify = (0, _linkifyIt.default)({
  fuzzyIP: false
});
linkify.tlds(_tlds.default);

var Link =
/*#__PURE__*/
function (_Component) {
  _inherits(Link, _Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onUrlChange", function (event) {
      event.stopPropagation();
      var url = event.target.value;

      if (url === '') {
        _this.cancelError();
      }

      _this.setState({
        url: url
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setUrl", function (event) {
      _this.submitUrl(_this.state.url);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setError", function (errorMsg) {
      _this.setState({
        error: errorMsg
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancelError", function () {
      _this.setState({
        error: null
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitUrl", function (url) {
      var match = linkify.match(url);

      if (match === null) {
        _this.setError('无效的链接');

        return;
      }

      var matchedUrl = match[0].url;

      _this.setState({
        url: matchedUrl
      });

      (0, _entity.setEntity)('LINK', {
        url: matchedUrl
      }, _this.props.getEditorState(), _this.props.setEditorState);

      _this.props.closeModal();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();

      _this.setUrl();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCancel", function (event) {
      event.preventDefault();

      if (_this.props.entitySelected) {
        (0, _entity.removeEntity)('LINK', _this.props.getEditorState(), _this.props.setEditorState);
      }

      _this.cancelError();

      _this.props.closeModal();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();

        _this.setUrl();
      } else if (event.key === 'Escape') {
        event.preventDefault();

        _this.props.closeModal();
      }
    });

    _this.state = {
      url: props && props.url || '',
      error: null
    };
    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          entitySelected = _this$props.entitySelected,
          position = _this$props.position;
      var error = this.state.error;
      return _react.default.createElement(_styles.ToolbarWrapper, {
        style: position,
        show: true
      }, _react.default.createElement(_styles2.LinkInput, {
        autoFocus: true,
        type: "text",
        onChange: this.onUrlChange,
        value: this.state.url,
        onKeyDown: this.onKeyDown,
        placeholder: "\u8F93\u5165\u94FE\u63A5\u5730\u5740"
      }), _react.default.createElement(_Button.IconButton, {
        glyph: "ok",
        onClick: this.onSubmit,
        tipText: "\u786E\u8BA4",
        tipLocation: "top",
        size: 24
      }), _react.default.createElement(_Button.IconButton, {
        glyph: "cancel",
        onClick: this.onCancel,
        tipText: "\u53D6\u6D88",
        tipLocation: "top",
        size: 24
      }));
    }
  }]);

  return Link;
}(_react.Component);

var _default =
/*#__PURE__*/
function (_Component2) {
  _inherits(_default, _Component2);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var editorState = this.props.getEditorState();
      var entitySelected = (0, _entity.hasEntity)('LINK', editorState);
      var entity = (0, _entity.getCurrentEntity)(editorState);
      var entityData = null;

      if (entitySelected) {
        if (entity) {
          entityData = entity.getData();
        }
      }

      var url = entityData ? entityData.url : null;
      return _react.default.createElement(Link, _extends({
        url: url,
        entitySelected: entitySelected
      }, this.props));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;