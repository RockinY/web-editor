"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _draftJs = require("draft-js");

var _createDecorator = _interopRequireDefault(require("./createDecorator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var store = {
  getEditorRef: undefined,
  getReadOnly: undefined,
  getEditorState: undefined,
  setEditorState: undefined
};

var createSetResizeData = function createSetResizeData(contentBlock, _ref) {
  var getEditorState = _ref.getEditorState,
      setEditorState = _ref.setEditorState;
  return function (data) {
    var entityKey = contentBlock.getEntityAt(0);

    if (entityKey) {
      var editorState = getEditorState();
      var contentState = editorState.getCurrentContent();
      contentState.mergeEntityData(entityKey, _objectSpread({}, data));
      setEditorState(_draftJs.EditorState.forceSelection(editorState, editorState.getSelection()));
    }
  };
};

var _default = function _default(config) {
  return {
    initialize: function initialize(_ref2) {
      var getEditorRef = _ref2.getEditorRef,
          getReadOnly = _ref2.getReadOnly,
          getEditorState = _ref2.getEditorState,
          setEditorState = _ref2.setEditorState;
      store.getReadOnly = getReadOnly;
      store.getEditorRef = getEditorRef;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    decorator: (0, _createDecorator.default)({
      config: config,
      store: store
    }),
    blockRendererFn: function blockRendererFn(contentBlock, _ref3) {
      var getEditorState = _ref3.getEditorState,
          setEditorState = _ref3.setEditorState;
      var entityKey = contentBlock.getEntityAt(0);
      var contentState = getEditorState().getCurrentContent();
      var resizeData = entityKey ? contentState.getEntity(entityKey).data : {};
      return {
        props: {
          resizeData: resizeData,
          setResizeData: createSetResizeData(contentBlock, {
            getEditorState: getEditorState,
            setEditorState: setEditorState
          })
        }
      };
    }
  };
};

exports.default = _default;