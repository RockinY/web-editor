import React, { Component } from 'react'
import { RichUtils } from 'draft-js'

export default ({ style, Button }) => (
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
      return (
        <div
          onMouseDown={this.preventBubblingUp}
        >
          <Button
            onClick={this.toggleStyle}
          />
        </div>
      ) 
    }
  }
)