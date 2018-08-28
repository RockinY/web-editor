import React, { Component } from 'react'
import PluginEditor from 'draft-js-plugins-editor'

/* Linkify */
import createLinkifyPlugin from '../plugins/linkify'
const linkifyPlugin = createLinkifyPlugin()

/* All plugins */
const plugins = [
  linkifyPlugin
]

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
          plugins={plugins}
        />
      </div>
    )
  }
}

export default Editor