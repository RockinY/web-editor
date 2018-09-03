import React, {Component} from 'react'
import { RichUtils } from 'draft-js'
import { Picker } from '../colorPicker' 

export default class extends Component {
  setColor = (color) => {
    const editorState = this.props.getEditorState()
    const currentStyle = editorState.getCurrentInlineStyle()
    const safeName = color.replace('#', '')
    const colorName = `color-${safeName}`
    
    if (!currentStyle.has(colorName)) {
      this.props.setEditorState(
        RichUtils.toggleInlineStyle(editorState, colorName)
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