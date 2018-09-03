"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fromPlainText = exports.toPlainText = exports.fromJSON = exports.toJSON = void 0;

var _Editor = _interopRequireDefault(require("./components/Editor"));

var convert = _interopRequireWildcard(require("./convert"));

require("./styles/global");

require("./styles/prism");

require("draft-js/dist/Draft.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* styles */
var toJSON = convert.toJSON;
exports.toJSON = toJSON;
var fromJSON = convert.fromJSON;
exports.fromJSON = fromJSON;
var toPlainText = convert.toPlainText;
exports.toPlainText = toPlainText;
var fromPlainText = convert.fromPlainText;
exports.fromPlainText = fromPlainText;
var _default = _Editor.default;
exports.default = _default;