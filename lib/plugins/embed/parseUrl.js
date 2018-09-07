"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.STARTS_WITH_PROTOCOL = exports.CODEPEN_URLS = exports.IFRAME_TAG = void 0;

var _isURL = _interopRequireDefault(require("validator/lib/isURL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IFRAME_TAG = /(<iframe.*?src=['"](.*?)['"])/gi;
exports.IFRAME_TAG = IFRAME_TAG;
var CODEPEN_URLS = /(https?:\/\/)?(.+?\.)?codepen.io(\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?/gi;
exports.CODEPEN_URLS = CODEPEN_URLS;
var STARTS_WITH_PROTOCOL = /^https?:\/\//i;
exports.STARTS_WITH_PROTOCOL = STARTS_WITH_PROTOCOL;

var addProtocolToString = function addProtocolToString(url) {
  if (STARTS_WITH_PROTOCOL.test(url)) {
    return url;
  } else {
    return "https://".concat(url);
  }
};

var parseEmbedUrl = function parseEmbedUrl(incomingUrl) {
  /* Check iframe */
  var isIframeTag = incomingUrl.match(IFRAME_TAG);

  if (isIframeTag) {
    return {
      url: IFRAME_TAG.exec(incomingUrl)[2]
    };
  }
  /* Pre process */


  var url = addProtocolToString(incomingUrl);
  /* Codepen */

  var isCodePenUrl = url.match(CODEPEN_URLS);

  if (isCodePenUrl) {
    return {
      url: url,
      height: 300
    };
  }

  if (!(0, _isURL.default)(url)) return null;
  return {
    url: url
  };
};

var _default = parseEmbedUrl;
exports.default = _default;