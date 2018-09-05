import React from 'react'
import { MediaLabel, MediaInput } from './styles'
import Icon from '../../../components/Icons'

export default ({
  onChange,
  accept = '.png, .jpg, .jpeg, .gif, .mp4',
  multiple = false,
  tipLocation,
}) => (
  <MediaLabel>
    <MediaInput
      type="file"
      accept={accept}
      multiple={multiple}
      onChange={onChange}
    />
    <Icon
      glyph="photo"
      tipLocation={tipLocation ? tipLocation : 'top-right'}
      tipText="上传图片"
    />
  </MediaLabel>
);