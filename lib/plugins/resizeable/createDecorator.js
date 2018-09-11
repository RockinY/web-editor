"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getDisplayName = function getDisplayName(WrappedComponent) {
  var component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

var round = function round(x, steps) {
  return Math.ceil(x / steps) * steps;
};

var _default = function _default(_ref) {
  var config = _ref.config,
      store = _ref.store;
  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inherits(BlockResizeableDecorator, _Component);

      function BlockResizeableDecorator() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, BlockResizeableDecorator);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BlockResizeableDecorator)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          hoverPosition: {},
          clicked: false
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setEntityData", function (data) {
          _this.props.blockProps.setResizeData(data);
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseLeave", function () {
          if (!_this.state.clicked) {
            _this.setState({
              hoverPosition: {}
            });
          }
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseMove", function (evt) {
          var _this$props = _this.props,
              vertical = _this$props.vertical,
              horizontal = _this$props.horizontal;
          var hoverPosition = _this.state.hoverPosition;
          var tolerance = 6; // TODO figure out if and how to achieve this without fetching the DOM node
          // eslint-disable-next-line react/no-find-dom-node

          var pane = _reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));

          var b = pane.getBoundingClientRect();
          var x = evt.clientX - b.left;
          var y = evt.clientY - b.top;
          var isTop = vertical && vertical !== 'auto' ? y < tolerance : false;
          var isLeft = horizontal ? x < tolerance : false;
          var isRight = horizontal ? x >= b.width - tolerance : false;
          var isBottom = vertical && vertical !== 'auto' ? y >= b.height - tolerance && y < b.height : false;
          var canResize = isTop || isLeft || isRight || isBottom;
          var newHoverPosition = {
            isTop: isTop,
            isLeft: isLeft,
            isRight: isRight,
            isBottom: isBottom,
            canResize: canResize
          };
          var hasNewHoverPositions = Object.keys(newHoverPosition).filter(function (key) {
            return hoverPosition[key] !== newHoverPosition[key];
          });

          if (hasNewHoverPositions.length) {
            _this.setState({
              hoverPosition: newHoverPosition
            });
          }
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseDown", function (event) {
          // No mouse-hover-position data? Nothing to resize!
          if (!_this.state.hoverPosition.canResize) {
            return;
          }

          event.preventDefault();
          var _this$props2 = _this.props,
              resizeSteps = _this$props2.resizeSteps,
              vertical = _this$props2.vertical,
              horizontal = _this$props2.horizontal;
          var hoverPosition = _this.state.hoverPosition;
          var isTop = hoverPosition.isTop,
              isLeft = hoverPosition.isLeft,
              isRight = hoverPosition.isRight,
              isBottom = hoverPosition.isBottom; // TODO figure out how to achieve this without fetching the DOM node
          // eslint-disable-next-line react/no-find-dom-node

          var pane = _reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));

          var startX = event.clientX;
          var startY = event.clientY;
          var startWidth = parseInt(document.defaultView.getComputedStyle(pane).width, 10);
          var startHeight = parseInt(document.defaultView.getComputedStyle(pane).height, 10); // Do the actual drag operation

          var doDrag = function doDrag(dragEvent) {
            var width = startWidth + (isLeft ? startX - dragEvent.clientX : dragEvent.clientX - startX);
            var height = startHeight + dragEvent.clientY - startY;
            var editorComp = store.getEditorRef(); // this keeps backwards-compatibility with react 15

            var editorNode = editorComp.refs.editor ? editorComp.refs.editor : editorComp.editor;
            width = Math.min(editorNode.clientWidth, width);
            height = Math.min(editorNode.clientHeight, height);
            var widthPerc = 100 / editorNode.clientWidth * width;
            var heightPerc = 100 / editorNode.clientHeight * height;
            var newState = {};

            if ((isLeft || isRight) && horizontal === 'relative') {
              newState.width = resizeSteps ? round(widthPerc, resizeSteps) : widthPerc;
            } else if ((isLeft || isRight) && horizontal === 'absolute') {
              newState.width = resizeSteps ? round(width, resizeSteps) : width;
            }

            if ((isTop || isBottom) && vertical === 'relative') {
              newState.height = resizeSteps ? round(heightPerc, resizeSteps) : heightPerc;
            } else if ((isTop || isBottom) && vertical === 'absolute') {
              newState.height = resizeSteps ? round(height, resizeSteps) : height;
            }

            dragEvent.preventDefault();

            _this.setState(newState);
          }; // Finished dragging


          var stopDrag = function stopDrag() {
            // TODO clean up event listeners
            document.removeEventListener('mousemove', doDrag, false);
            document.removeEventListener('mouseup', stopDrag, false);
            var _this$state = _this.state,
                width = _this$state.width,
                height = _this$state.height;

            _this.setState({
              clicked: false
            });

            _this.setEntityData({
              width: width,
              height: height
            });
          }; // TODO clean up event listeners


          document.addEventListener('mousemove', doDrag, false);
          document.addEventListener('mouseup', stopDrag, false);

          _this.setState({
            clicked: true
          });
        });

        return _this;
      }

      _createClass(BlockResizeableDecorator, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props3 = this.props,
              blockProps = _this$props3.blockProps,
              vertical = _this$props3.vertical,
              horizontal = _this$props3.horizontal,
              style = _this$props3.style,
              resizeSteps = _this$props3.resizeSteps,
              elementProps = _objectWithoutProperties(_this$props3, ["blockProps", "vertical", "horizontal", "style", "resizeSteps"]);

          var _this$state2 = this.state,
              width = _this$state2.width,
              height = _this$state2.height,
              hoverPosition = _this$state2.hoverPosition;
          var isTop = hoverPosition.isTop,
              isLeft = hoverPosition.isLeft,
              isRight = hoverPosition.isRight,
              isBottom = hoverPosition.isBottom;

          var styles = _objectSpread({
            position: 'relative'
          }, style);

          if (horizontal === 'auto') {
            styles.width = 'auto';
          } else if (horizontal === 'relative') {
            styles.width = "".concat(width || blockProps.resizeData.width || 40, "%");
          } else if (horizontal === 'absolute') {
            styles.width = "".concat(width || blockProps.resizeData.width || 40, "px");
          }

          if (vertical === 'auto') {
            styles.height = 'auto';
          } else if (vertical === 'relative') {
            styles.height = "".concat(height || blockProps.resizeData.height || 40, "%");
          } else if (vertical === 'absolute') {
            styles.height = "".concat(height || blockProps.resizeData.height || 40, "px");
          } // Handle cursor


          if (isRight && isBottom || isLeft && isTop) {
            styles.cursor = 'nwse-resize';
          } else if (isRight && isTop || isBottom && isLeft) {
            styles.cursor = 'nesw-resize';
          } else if (isRight || isLeft) {
            styles.cursor = 'ew-resize';
          } else if (isBottom || isTop) {
            styles.cursor = 'ns-resize';
          } else {
            styles.cursor = 'default';
          }

          var interactionProps = store.getReadOnly() ? {} : {
            onMouseDown: this.mouseDown,
            onMouseMove: this.mouseMove,
            onMouseLeave: this.mouseLeave
          };
          return _react.default.createElement(WrappedComponent, _extends({}, elementProps, interactionProps, {
            blockProps: blockProps,
            ref: function ref(element) {
              _this2.wrapper = element;
            },
            style: styles
          }));
        }
      }]);

      return BlockResizeableDecorator;
    }(_react.Component), _defineProperty(_class, "displayName", "BlockDraggable(".concat(getDisplayName(WrappedComponent), ")")), _defineProperty(_class, "WrappedComponent", WrappedComponent.WrappedComponent || WrappedComponent), _defineProperty(_class, "defaultProps", _objectSpread({
      horizontal: 'relative',
      vertical: false,
      resizeSteps: 1
    }, config)), _temp;
  };
};

exports.default = _default;