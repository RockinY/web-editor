import React, { Component } from 'react'
import PluginEditor, { composeDecorators } from 'draft-js-plugins-editor'
import addImageFn from '../plugins/image/addImage'
import { fromJS } from 'immutable'
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

/* DnD */
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
const dndPlugin = createBlockDndPlugin();

/* Decorators */
const decorator = composeDecorators(
  focusPlugin.decorator,
  dndPlugin.decorator
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

/* Mention */
import createMentionPlugin, { defaultSuggestionFilter } from '../plugins/mentions'
const mentionPlugin = createMentionPlugin()
const { MentionSuggestions } = mentionPlugin

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
  dividerPlugin,
  mentionPlugin
]

type Props = {
  mentionSearchAsync: Function,
  editorState: any
}

type State = {
  suggestions: Array<Object>
}

class Editor extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.editor = React.createRef()
    this.state = {
      suggestions: []
    }
  }

  onChange = (editorState) => {
    this.props.onChange(editorState)
  }

  handleDroppedFiles = (selection, files) => {
    const { editorState, onChange } = this.props
    // Add images to editorState
    for (var i = 0, file; (file = files[i]); i++) {
      onChange(addImageFn(editorState, window.URL.createObjectURL(file), { file }));
    }
  };

  onSearchChange = ({ value }) => {
    const { mentionSearchAsync } = this.props
    if (mentionSearchAsync) {
      this.props.mentionSearchAsync(value)
        .then((data) => { this.setState({suggestions: data.suggestions}) })
    }
  }

  render () {
    const { editorState, mentionSearchAsync, onChange, ...restProps } = this.props
    return (
      <div className='draftjs-web-editor'>
        <PluginEditor
          editorState={editorState}
          onChange={this.onChange}
          customStyleMap={colorStyleMap}
          handleDroppedFiles={this.handleDroppedFiles}
          plugins={plugins}
          ref={this.editor.current}
          {...restProps}
        />
        <Sidebar
          onChange={this.onChange}
          editorState={editorState}
        />
        <Toolbar />
        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
          onClose={() => this.setState({suggestions: fromJS([])})}
        />
      </div>
    )
  }
}

export default Editor