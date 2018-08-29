import React, { Component } from 'react'
import PluginEditor from 'draft-js-plugins-editor'

/* Linkify */
import createLinkifyPlugin from '../plugins/linkify'
const linkifyPlugin = createLinkifyPlugin()

/* Sidebar */
import createSidebarPlugin from '../plugins/sidebar'
const sidebarPlugin = createSidebarPlugin()
const { Sidebar } = sidebarPlugin

/* Image */
import createImagePlugin from '../plugins/image'
const imagePlugin = createImagePlugin()

/* All plugins */
const plugins = [
  linkifyPlugin,
  sidebarPlugin,
  imagePlugin
]

class Editor extends Component {
  constructor(props) {
    super(props)
    this.editor = React.createRef()
  }

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
          ref={this.editor.current}
        />
        <Sidebar
          onChange={this.onChange}
          editorState={this.props.editorState}
        />
      </div>
    )
  }
}

export default Editor