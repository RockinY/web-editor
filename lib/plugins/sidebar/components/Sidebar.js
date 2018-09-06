"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DraftOffsetKey = _interopRequireDefault(require("draft-js/lib/DraftOffsetKey"));

var _styles = require("./styles");

var _Button = require("../../../components/Button");

var _MediaInput = _interopRequireDefault(require("./MediaInput"));

var _addImage = _interopRequireDefault(require("../../image/addImage"));

var _OutsideClickHandler = _interopRequireDefault(require("../../../components/OutsideClickHandler"));

var _button = require("../../button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      inserting: false,
      position: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEditorStateChange", function (editorState) {
      var selection = editorState.getSelection();
      var currentContent = editorState.getCurrentContent();
      var currentBlock = currentContent.getBlockForKey(selection.getStartKey());

      var offsetKey = _DraftOffsetKey.default.encode(currentBlock.getKey(), 0, 0);

      var currentBlockType = currentBlock.getType();
      var currentBlockLength = currentBlock.getLength(); // Note: need to wait on tick to make sure the DOM node has been create by Draft.js

      setTimeout(function () {
        var node = document.querySelectorAll("[data-offset-key=\"".concat(offsetKey, "\"]"))[0];

        if (!node) {
          return;
        }

        var editorRef = _this.props.store.getItem('getEditorRef')();

        if (!editorRef) return; // this keeps backwards-compatibility with react 15

        var editorRoot = editorRef.refs && editorRef.refs.editor ? editorRef.refs.editor : editorRef.editor;

        while (editorRoot.className.indexOf('DraftEditor-root') === -1) {
          editorRoot = editorRoot.parentNode;
        }

        var show = false;

        if (currentBlockType === 'unstyled' && currentBlockLength === 0) {
          show = true;
        }

        _this.setState({
          show: show,
          position: {
            top: node.offsetTop + editorRoot.offsetTop,
            left: node.offsetLeft + 18
          }
        });
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSidebar", function () {
      _this.setState({
        inserting: !_this.state.inserting
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeSidebar", function () {
      if (_this.state.inserting) {
        _this.setState({
          inserting: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addImages", function (files) {
      var addImage = _this.state.addImage;
      var _this$props = _this.props,
          state = _this$props.state,
          onChange = _this$props.onChange; // Add images to editorState
      // eslint-disable-next-line

      for (var i = 0, file; file = files[i]; i++) {
        onChange(addImage(state, window.URL.createObjectURL(file), {
          file: file
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addImage", function (e) {
      _this.addImages(e.target.files);

      _this.closeSidebar();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addImages", function (files) {
      var _this$props2 = _this.props,
          editorState = _this$props2.editorState,
          onChange = _this$props2.onChange; // Add images to editorState

      for (var i = 0, file; file = files[i]; i++) {
        onChange((0, _addImage.default)(editorState, window.URL.createObjectURL(file), {
          file: file
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeSidebar", function () {
      _this.setState({
        inserting: false
      });
    });

    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.store.subscribeToItem('editorState', this.onEditorStateChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.unsubscribeFromItem('editorState', this.onEditorStateChange);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.props.store;
      var _this$state = this.state,
          position = _this$state.position,
          inserting = _this$state.inserting,
          show = _this$state.show;
      return _react.default.createElement(_OutsideClickHandler.default, {
        onOutsideClick: this.closeSidebar
      }, _react.default.createElement(_styles.SidebarWrapper, {
        style: position,
        show: show
      }, _react.default.createElement(_styles.Expander, {
        inserting: inserting
      }, _react.default.createElement(_Button.IconButton, {
        glyph: 'inserter',
        onClick: this.toggleSidebar
      }), _react.default.createElement(_styles.Action, null, _react.default.createElement(_MediaInput.default, {
        onChange: this.addImage,
        multiple: true,
        tipLocation: 'bottom'
      })), _react.default.createElement(_styles.Action, null, _react.default.createElement(_button.BlockCodeButton, {
        tipText: "\u8F93\u5165\u4EE3\u7801",
        tipLocation: 'bottom',
        getEditorState: store.getItem('getEditorState'),
        setEditorState: store.getItem('setEditorState'),
        size: 32
      })))));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

var _default = Sidebar;
exports.default = _default;