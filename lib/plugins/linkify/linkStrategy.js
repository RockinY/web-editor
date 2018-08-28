"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _linkifyIt = _interopRequireDefault(require("linkify-it"));

var _tlds = _interopRequireDefault(require("tlds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkify = (0, _linkifyIt.default)();
linkify.tlds(_tlds.default); // Gets all the links in the text, and returns them via the callback

var linkStrategy = function linkStrategy(contentBlock, callback) {
  var links = linkify.match(contentBlock.get('text'));

  if (typeof links !== 'undefined' && links !== null) {
    for (var i = 0; i < links.length; i += 1) {
      callback(links[i].index, links[i].lastIndex);
    }
  }
};

var _default = linkStrategy;
exports.default = _default;