"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJsPluginsEditor = _interopRequireDefault(require("draft-js-plugins-editor"));

var _prismjs = _interopRequireDefault(require("prismjs"));

require("prismjs/components/prism-java");

require("prismjs/components/prism-scala");

require("prismjs/components/prism-go");

require("prismjs/components/prism-sql");

require("prismjs/components/prism-bash");

require("prismjs/components/prism-c");

require("prismjs/components/prism-cpp");

require("prismjs/components/prism-kotlin");

require("prismjs/components/prism-perl");

require("prismjs/components/prism-ruby");

require("prismjs/components/prism-swift");

var _linkify = _interopRequireDefault(require("../plugins/linkify"));

var _sidebar = _interopRequireDefault(require("../plugins/sidebar"));

var _image = _interopRequireDefault(require("../plugins/image"));

var _toolbar = _interopRequireDefault(require("../plugins/toolbar"));

var _colorPicker = require("../plugins/colorPicker");

var _prism = _interopRequireDefault(require("../plugins/prism"));

var _code = _interopRequireDefault(require("../plugins/code"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var linkifyPlugin = (0, _linkify.default)();
/* Sidebar */

var sidebarPlugin = (0, _sidebar.default)();
var Sidebar = sidebarPlugin.Sidebar;
/* Image */

var imagePlugin = (0, _image.default)();
/* Toolbar */

var toolbarPlugin = (0, _toolbar.default)();
var Toolbar = toolbarPlugin.Toolbar;
/* Coloe */

var prismPlugin = (0, _prism.default)({
  prism: _prismjs.default
});
/* Code editor */

var codePlugin = (0, _code.default)();
/* All plugins */

var plugins = [linkifyPlugin, sidebarPlugin, imagePlugin, toolbarPlugin, prismPlugin, codePlugin];

var Editor =
/*#__PURE__*/
function (_Component) {
  _inherits(Editor, _Component);

  function Editor(props) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (editorState) {
      _this.props.onChange(editorState);
    });

    _this.editor = _react.default.createRef();
    return _this;
  }

  _createClass(Editor, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "draftjs-web-editor"
      }, _react.default.createElement(_draftJsPluginsEditor.default, {
        editorState: this.props.editorState,
        onChange: this.onChange,
        customStyleFn: _colorPicker.colorStyleFn,
        plugins: plugins,
        ref: this.editor.current
      }), _react.default.createElement(Sidebar, {
        onChange: this.onChange,
        editorState: this.props.editorState
      }), _react.default.createElement(Toolbar, null));
    }
  }]);

  return Editor;
}(_react.Component);

var _default = Editor;
exports.default = _default;