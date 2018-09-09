"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.escaperegexp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findWithRegex = function findWithRegex(regex, contentBlock, callback) {
  var contentBlockText = contentBlock.getText(); // exclude entities, when matching

  contentBlock.findEntityRanges(function (character) {
    return !character.getEntity();
  }, function (nonEntityStart, nonEntityEnd) {
    var text = contentBlockText.slice(nonEntityStart, nonEntityEnd);
    var matchArr;
    var start; // Go through all matches in the text and return the indices to the callback

    while ((matchArr = regex.exec(text)) !== null) {
      // eslint-disable-line
      start = nonEntityStart + matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  });
};

var _default = function _default(trigger, supportWhiteSpace, regExp) {
  //eslint-disable-line
  var MENTION_REGEX = supportWhiteSpace ? new RegExp("".concat((0, _lodash.default)(trigger), "[\\w\\s]{0,}"), 'g') : new RegExp("(\\s|^)".concat((0, _lodash.default)(trigger), "[\\w]*"), 'g');
  return function (contentBlock, callback) {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};

exports.default = _default;