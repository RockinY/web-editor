/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 * Copyright (c) 2016, Nik Graf (https://www.draft-js-plugins.com)
 *
 * License: MIT
 */
import Picker from './Picker'

const colorStyleFn = (styles) => {
  const output = {};
  const re = new RegExp('color-([0-9a-fA-F]{3,6})');
  const style = styles.filter(v => v.startsWith('color')).last()
  
  if (re.test(style)) {
    output['color'] = `#${re.exec(style)[1]}`
  }
  
  return output
}

module.exports = {
  Picker,
  colorStyleFn
}