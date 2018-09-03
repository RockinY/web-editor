"use strict";

var _Picker = _interopRequireDefault(require("./Picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 * Copyright (c) 2016, Nik Graf (https://www.draft-js-plugins.com)
 *
 * License: MIT
 */
var colorStyleFn = function colorStyleFn(styles) {
  var output = {};
  var re = new RegExp('color-([0-9a-fA-F]{3,6})');
  var style = styles.filter(function (v) {
    return v.startsWith('color');
  }).last();

  if (re.test(style)) {
    output['color'] = "#".concat(re.exec(style)[1]);
  }

  return output;
};

module.exports = {
  Picker: _Picker.default,
  colorStyleFn: colorStyleFn
};