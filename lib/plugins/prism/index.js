"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _draftJsPrism = _interopRequireDefault(require("draft-js-prism"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var prismPlugin = function prismPlugin(options) {
  if (!options || !options.prism) throw new Error('You must provide an instance of the prism.js library to draft-js-prism-plugin. See the documentation at https://github.com/withspectrum/draft-js-prism-plugin for more information!');
  var prism = options.prism;
  return {
    decorators: [new _draftJsPrism.default({
      prism: prism,
      getSyntax: function getSyntax(block) {
        var data = block.getData();
        var language = data.get('language') || data.get('syntax');

        if (_typeof(prism.languages[language]) === 'object') {
          return language;
        }

        return null;
      }
    })]
  };
};

var _default = prismPlugin;
exports.default = _default;