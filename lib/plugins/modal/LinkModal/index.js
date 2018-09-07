"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _entity = require("./entity");

var _linkifyIt = _interopRequireDefault(require("linkify-it"));

var _tlds = _interopRequireDefault(require("tlds"));

var _styles = require("../../toolbar/components/styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

console.log('what');
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
    _this.state = {
      url: props && props.url || '',
      error: null
    };
    return _this;
  }

  _createClass(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('ddscds');

      _reactDom.default.findDOMNode(this.refs.textInput).focus();
    }
  }, {
    key: "onUrlChange",
    value: function onUrlChange(event) {
      event.stopPropagation();
      var url = event.target.value;

      if (url === '') {
        this.cancelError();
      }

      this.setState({
        url: url
      });
    }
  }, {
    key: "setUrl",
    value: function setUrl(event) {
      this.submitUrl(this.state.url);
    }
  }, {
    key: "setError",
    value: function setError(errorMsg) {
      this.setState({
        error: errorMsg
      });
    }
  }, {
    key: "cancelError",
    value: function cancelError() {
      this.setState({
        error: null
      });
    }
  }, {
    key: "submitUrl",
    value: function submitUrl(url) {
      var _this2 = this;

      var match = linkify.match(url);

      if (match === null) {
        this.setError('无效的链接');

        _reactDom.default.findDOMNode(this.refs.textInput).focus();

        return;
      }

      var matchedUrl = match[0].url;
      this.setState({
        url: matchedUrl
      }, function () {
        _reactDom.default.findDOMNode(_this2.refs.textInput).value = matchedUrl;
      });
      (0, _entity.setEntity)('LINK', {
        url: matchedUrl
      }, this.props.getEditorState(), this.props.setEditorState);
      this.props.closeModal();
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      this.setUrl();
    }
  }, {
    key: "onCancel",
    value: function onCancel(event) {
      event.preventDefault();

      if (this.props.entitySelected) {
        (0, _entity.removeEntity)('LINK', this.props.getEditorState(), this.props.setEditorState);
      }

      this.cancelError();
      this.props.closeModal();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.setUrl();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        this.props.closeModal();
      }
    }
  }, {
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
        ref: "textInput",
        type: "text",
        onChange: this.onUrlChange,
        value: this.state.url,
        onKeyDown: this.onKeyDown,
        placeholder: "\u8F93\u5165\u94FE\u63A5\u5730\u5740"
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
      console.log('shajkdhsk');
      var editorState = this.props.getEditorState();
      var entitySelected = (0, _entity.hasEntity)('LINK', editorState);
      var entity = (0, _entity.getCurrentEntity)(editorState);
      var entityData = null;
      console.log(entitySelected);

      if (entitySelected) {
        if (entity) {
          entityData = entity.getData();
        }
      }

      var url = entityData ? entityData.url : null;
      console.log('hhhh');
      return _react.default.createElement(Link, _extends({
        url: url,
        entitySelected: entitySelected
      }, this.props));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;