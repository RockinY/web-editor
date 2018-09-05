import React from 'react'
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey'
import {
  SidebarWrapper,
  Expander,
  Action
} from './styles'
import {
  IconButton
} from '../../../components/Button'
import MediaInput from './MediaInput'
import addImageFn from '../../image/addImage'
import OutsideClickHandler from '../../../components/OutsideClickHandler'
import { BlockCodeButton } from '../../button'

type Props = {
  store: Object,
  editorState: any,
  onChange: Function
};

type ToolbarPosition = {
  top?: number,
  left?: number,
  transform?: string
};

type State = {
  position: ?ToolbarPosition,
  inserting: boolean
};

class Sidebar extends React.Component<Props, State> {
  state = {
    inserting: false,
    position: {
      transform: 'scale(0)'
    }
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

      const editorRef = this.props.store.getItem('getEditorRef')();
      if (!editorRef) return;

      // this keeps backwards-compatibility with react 15
      let editorRoot = editorRef.refs && editorRef.refs.editor
        ? editorRef.refs.editor : editorRef.editor;
      while (editorRoot.className.indexOf('DraftEditor-root') === -1) {
        editorRoot = editorRoot.parentNode;
      }

      this.setState({
        position: {
          top: node.offsetTop + editorRoot.offsetTop,
          left: node.offsetLeft + 18,
          transform: 'scale(1)'
        }
      })
    }, 0)
  }

  toggleSidebar = () => {
    this.setState({ inserting: !this.state.inserting })
  }

  closeSidebar = () => {
    if (this.state.inserting) {
      this.setState({ inserting: false })
    }
  }

  addImages = (files: FileList) => {
    const { addImage } = this.state;
    const { state, onChange } = this.props;
    // Add images to editorState
    // eslint-disable-next-line
    for (var i = 0, file; (file = files[i]); i++) {
      onChange(addImage(state, window.URL.createObjectURL(file), { file }));
    }
  };

  addImage = (e) => {
    this.addImages(e.target.files)
    this.closeSidebar()
  }

  addImages = (files) => {
    const { editorState, onChange } = this.props;
    // Add images to editorState
    for (var i = 0, file; (file = files[i]); i++) {
      onChange(addImageFn(editorState, window.URL.createObjectURL(file), { file }));
    }
  };

  closeSidebar = () => {
    this.setState({
      inserting: false
    })
  }

  render () {
    const { store } = this.props
    const { position, inserting } = this.state

    return (
      <OutsideClickHandler onOutsideClick={this.closeSidebar}>
        <SidebarWrapper style={position}>
          <Expander inserting={inserting}>
            <IconButton
              glyph={'inserter'}
              onClick={this.toggleSidebar}
            />
            <Action>
              <MediaInput
                onChange={this.addImage}
                multiple
                tipLocation={'right'}
              />
            </Action>
            <Action>
              <BlockCodeButton
                tipText='输入代码'
                tipLocation={'right'}
                getEditorState={store.getItem('getEditorState')}
                setEditorState={store.getItem('setEditorState')}
                size={32}
              />
            </Action>
          </Expander>
        </SidebarWrapper>
      </OutsideClickHandler>
    )
  }
}

export default Sidebar