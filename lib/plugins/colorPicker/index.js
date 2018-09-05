"use strict";

var _Picker = _interopRequireWildcard(require("./Picker"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var colorStyleMap = {};

_Picker.colors.map(function (c, i) {
  colorStyleMap["color-".concat(c.replace('#', ''))] = {
    background: c,
    color: '#fff'
  };
});

module.exports = {
  Picker: _Picker.default,
  colorStyleFn: colorStyleFn,
  colorStyleMap: colorStyleMap
};