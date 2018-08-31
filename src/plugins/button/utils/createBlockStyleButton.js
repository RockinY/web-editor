import React, { Component } from 'react'
import { RichUtils } from 'draft-js'
import {
  IconButton
} from '../../../components/Button'

export default ({ blockType, icon }) => (
  class InlineStyleButton extends Component {
    toggleStyle = (event) => {
      event.preventDefault()
      this.props.setEditorState(
        RichUtils.toggleBlockType(
          this.props.getEditorState(),
          blockType
        )
      )
    }

    preventBubblingUp = (event) => { event.preventDefault(); }   
    
    render () {
      return (
        <div
          onMouseDown={this.preventBubblingUp}
        >
          <IconButton
            onClick={this.toggleStyle}
            glyph={icon}
          />
        </div>
      ) 
    }
  }
)