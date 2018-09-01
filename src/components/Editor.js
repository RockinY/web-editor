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

/* Toolbar */
import cerateToolbarPlugin from '../plugins/toolbar'
const toolbarPlugin = cerateToolbarPlugin()
const { Toolbar } = toolbarPlugin

/* Coloe */
import { colorStyleFn } from '../plugins/colorPicker'

/* All plugins */
const plugins = [
  linkifyPlugin,
  sidebarPlugin,
  imagePlugin,
  toolbarPlugin
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
          customStyleFn={colorStyleFn}
          plugins={plugins}
          ref={this.editor.current}
        />
        <Sidebar
          onChange={this.onChange}
          editorState={this.props.editorState}
        />
        <Toolbar />
      </div>
    )
  }
}

export default Editor