import React from 'react'
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey'
import {
  SidebarWrapper,
  Expander
} from './styles'
import {
  IconButton
} from '../../../components/Button'

type Props = {
  store: Object
};

type ToolbarPosition = {
  top?: number,
  left?: number,
};

type State = {
  position: ?ToolbarPosition,
  inserting: boolean
};

class Sidebar extends React.Component<Props, State> {
  state = {
    inserting: false,
    position: {}
  }

  componentDidMount () {
    this.props.store.subscribeToItem('editorState', this.onEditorStateChange)
  }

  componentWillUnmount () {
    this.props.store.unsubscribeFromItem('editorState', this.onEditorStateChange)
  }

  onEditorStateChange = (editorState) => {
    const selection = editorState.getSelection()
    const currentContent = editorState.getCurrentContent()
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey())
    const offsetKey = DraftOffsetKey.encode(currentBlock.getKey(), 0, 0)
    // Note: need to wait on tick to make sure the DOM node has been create by Draft.js
    setTimeout(() => {
      const node = document.querySelectorAll(`[data-offset-key="${offsetKey}"]`)[0]
      if (!node) {
        return
      }
      const top = node.getBoundingClientRect().top
      const editor = this.props.store.getItem('getEditorRef')().refs.editor
      this.setState({
        position: {
          top: (top + window.scrollY),
          left: editor.getBoundingClientRect().left - 48
        }
      })
    }, 0)
  }

  toggleSidebar = () => {
    this.setState({ inserting: !this.state.inserting })
  }

  render () {
    const { store } = this.props
    const { position, inserting } = this.state

    return (
      <SidebarWrapper style={position}>
        <Expander inserting={inserting}>
          <IconButton
            glyph={'inserter'}
            onClick={this.toggleSidebar}
          />
        </Expander>
      </SidebarWrapper>
    )
  }
}