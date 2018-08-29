"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DraftOffsetKey = _interopRequireDefault(require("draft-js/lib/DraftOffsetKey"));

var _styles = require("./styles");

var _Button = require("../../../components/Button");

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
      inserting: false,
      position: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEditorStateChange", function (editorState) {
      var selection = editorState.getSelection();
      var currentContent = editorState.getCurrentContent();
      var currentBlock = currentContent.getBlockForKey(selection.getStartKey());

      var offsetKey = _DraftOffsetKey.default.encode(currentBlock.getKey(), 0, 0); // Note: need to wait on tick to make sure the DOM node has been create by Draft.js


      setTimeout(function () {
        var node = document.querySelectorAll("[data-offset-key=\"".concat(offsetKey, "\"]"))[0];

        if (!node) {
          return;
        }

        _this.setState({
          position: {
            top: node.offsetTop,
            left: node.offsetLeft - 48
          }
        });
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSidebar", function () {
      _this.setState({
        inserting: !_this.state.inserting
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
          inserting = _this$state.inserting;
      return _react.default.createElement(_styles.SidebarWrapper, {
        style: position
      }, _react.default.createElement(_styles.Expander, {
        inserting: inserting
      }, _react.default.createElement(_Button.IconButton, {
        glyph: 'inserter',
        onClick: this.toggleSidebar
      })));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

var _default = Sidebar;
exports.default = _default;