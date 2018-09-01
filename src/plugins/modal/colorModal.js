import React, {Component} from 'react'
import { RichUtils } from 'draft-js'
import { Picker } from '../colorPicker' 

export default class extends Component {
  setColor = (color) => {
    const editorState = this.props.getEditorState()
    const currentStyle = editorState.getCurrentInlineStyle()
    if (!currentStyle.has(color)) {
      const safeName = color.replace('#', '')
      this.props.setEditorState(
        RichUtils.toggleInlineStyle(editorState, `color-${safeName}`)
      )
      this.props.closeModal()
    }
  }

  render () {
    return (
      <Picker
        onSelected={this.setColor}
      /> 
    )
  }
}