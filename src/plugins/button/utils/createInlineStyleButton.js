import React, { Component } from 'react'
import { RichUtils } from 'draft-js'
import {
  IconButton
} from '../../../components/Button'
import {
  ButtonWrapper
} from '../styles'

export default ({ style, icon, inlineTipText, inlineTipLocation }) => (
  class InlineStyleButton extends Component {
    toggleStyle = (event) => {
      event.preventDefault()
      this.props.setEditorState(
        RichUtils.toggleInlineStyle(
          this.props.getEditorState(),
          style
        )
      )
    }

    preventBubblingUp = (event) => { event.preventDefault(); }   
    
    render () {
      const { size, tipText, tipLocation } = this.props
      return (
        <ButtonWrapper
          onMouseDown={this.preventBubblingUp}
        >
          <IconButton
            onClick={this.toggleStyle}
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