import React, { Fragment } from 'react'
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
import EmbedInput from './EmbedInput'

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
  inserting: boolean,
  embedding: boolean
};

class Sidebar extends React.Component<Props, State> {
  state = {
    show: false,
    inserting: false,
    embedding: false,
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
    const currentBlockType = currentBlock.getType()
    const currentBlockLength = currentBlock.getLength()

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

      var show = false
      if (currentBlockType === 'unstyled' && currentBlockLength === 0) {
        show = true
      }

      this.setState({
        show,
        position: {
          top: node.offsetTop + editorRoot.offsetTop,
          left: node.offsetLeft + 18
        }
      })
    }, 0)
  }

  toggleSidebar = () => {
    this.setState({
      inserting: !this.state.inserting,
      embedding: false
    })
  }

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
      inserting: false,
      embedding: false
    })
  }

  toggleEmbedding = () => {
    this.setState({ embedding: true })
  }

  insertEmbed = (url) => {
    console.log(url);
  }

  render () {
    const { store } = this.props
    const { position, inserting, show, embedding } = this.state

    return (
      <OutsideClickHandler onOutsideClick={this.closeSidebar}>
        <SidebarWrapper style={position} show={show}>
          <Expander inserting={inserting}>
            <IconButton
              glyph={'inserter'}
              onClick={this.toggleSidebar}
            />
            {
              !embedding && (
                <Fragment>
                  <Action>
                    <MediaInput
                      onChange={this.addImage}
                      multiple
                      tipLocation={'bottom'}
                    />
                  </Action>
                  <Action>
                    <BlockCodeButton
                      tipText='输入代码'
                      tipLocation={'bottom'}
                      getEditorState={store.getItem('getEditorState')}
                      setEditorState={store.getItem('setEditorState')}
                      size={32}
                    />
                  </Action>
                  <Action>
                    <IconButton
                      glyph={'embed'}
                      onClick={this.toggleEmbedding}
                      tipText='嵌入视频或网站内容'
                      tipLocation={'bottom'}
                      size={32}
                    />
                  </Action>
                </Fragment>
              )
            }
            {
              embedding && (
                <EmbedInput
                  onSubmit={this.insertEmbed}
                />
              )
            }
          </Expander>
        </SidebarWrapper>
      </OutsideClickHandler>
    )
  }
}

export default Sidebar