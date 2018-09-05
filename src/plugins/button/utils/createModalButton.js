import React, { Component } from 'react'
import {
  IconButton
} from '../../../components/Button'
import {
  ButtonWrapper
} from '../styles'

export default ({ type, icon, inlineTipText, inlineTipLocation }) => (
  class embedButton extends Component {

    onClick = (e) => {
      e.preventDefault()
      this.props.openModal(type)
    }

    preventBubblingUp = (event) => { event.preventDefault() }

    render () {
      const { size, tipText, tipLocation } = this.props
      return (
        <ButtonWrapper
          onMouseDown={this.preventBubblingUp}
        >
          <IconButton
            onClick={this.onClick}
            glyph={icon}
            size={size || 24}
            tipText={tipText || inlineTipText}
            tipLocation={tipLocation || inlineTipLocation || 'top'}
          />
        </ButtonWrapper>
      )
    }
  }
)
