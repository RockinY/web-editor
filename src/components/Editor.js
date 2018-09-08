import React, { Component } from 'react'
import PluginEditor, { composeDecorators } from 'draft-js-plugins-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-scala';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';

/* Focus */
import createFocusPlugin from 'draft-js-focus-plugin';
const focusPlugin = createFocusPlugin()

/* Decorators */
const decorator = composeDecorators(
  focusPlugin.decorator
);

/* Linkify */
import createLinkifyPlugin from 'draft-js-linkify-plugin';
const linkifyPlugin = createLinkifyPlugin({
  target: '_blank'
})

/* Sidebar */
import createSidebarPlugin from '../plugins/sidebar'
const sidebarPlugin = createSidebarPlugin()
const { Sidebar } = sidebarPlugin

/* Image */
import createImagePlugin from '../plugins/image'
const imagePlugin = createImagePlugin({
  decorator
})

/* Toolbar */
import createToolbarPlugin from '../plugins/toolbar'
const toolbarPlugin = createToolbarPlugin()
const { Toolbar } = toolbarPlugin

/* Color */
import { colorStyleMap } from '../plugins/colorPicker'

/* Prism */
import createPrismPlugin from '../plugins/prism'
const prismPlugin = createPrismPlugin({
  prism: Prism
})

/* Code editor */
import createCodeEditorPlugin from '../plugins/code'
const codePlugin = createCodeEditorPlugin()

/* Markdown */
import createMarkdownPlugin from 'draft-js-markdown-plugin'
import { renderLanguageSelect } from './LanguageSelect'
const markdownPlugin = createMarkdownPlugin({
  renderLanguageSelect
})

/* Embed */
import createEmbedPlugin from '../plugins/embed'
const embedPlugin = createEmbedPlugin()

/* Divider */
import createDividerPlugin from '../plugins/divider'
const dividerPlugin = createDividerPlugin()

/* Link */
import createLinkPlugin from '../plugins/link'
const linkPlugin = createLinkPlugin()

/* All plugins */
const plugins = [
  linkPlugin,
  linkifyPlugin,
  sidebarPlugin,
  imagePlugin,
  toolbarPlugin,
  prismPlugin,
  codePlugin,
  markdownPlugin,
  focusPlugin,
  embedPlugin,
  dividerPlugin
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
          customStyleMap={colorStyleMap}
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