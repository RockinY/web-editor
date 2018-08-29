import React from 'react'
import Icon from './Icon'
import {
  StyledIconButton
} from './styles'

export const IconButton = (props: IconProps) => (
  <StyledIconButton disabled={props.loading} {...props}>
    <Icon
      glyph={props.glyph}
      tipText={props.tipText}
      tipLocation={props.tipLocation}
    />
  </StyledIconButton>
)