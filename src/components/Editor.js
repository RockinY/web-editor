import React, { Component } from 'react'
import PluginEditor from 'draft-js-plugins-editor'

class Editor extends Component {
  onChange = (editorState) => {
    this.props.onChange(editorState)
  }

  render () {
    return (
      <div className='draftjs-web-editor'>
        <PluginEditor
          editorState={this.props.editorState}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Editor