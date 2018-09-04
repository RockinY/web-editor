import React from 'react'
import Icon from './Icons'
import {
  StyledIconButton
} from './styles'

export const IconButton = (props: IconProps) => (
  <StyledIconButton disabled={props.loading} {...props}>
    <Icon
      glyph={props.glyph}
      tipText={props.tipText}
      tipLocation={props.tipLocation}
      size={props.size}
    />
  </StyledIconButton>
)