import React, { Component } from 'react'
import { getVisibleSelectionRect } from 'draft-js'
import {
  ToolbarWrapper
} from './styles'
import OutsideClickHandler from '../../../components/OutsideClickHandler'
import { RichUtils } from 'draft-js'

class Toolbar extends Component {
  state = {
    isVisible: false,
    modalVisible: false,
    modal: null,
    position: {}
  }

  componentWillMount () {
    this.props.store.subscribeToItem('isVisible', this.onVisibilityChanged)
  }

  componentWillUnmount () {
    this.props.store.unsubscribeFromItem('isVisible', this.onVisibilityChanged)
  }

  onVisibilityChanged = (isVisible) => {
    const toolbarHeightOffset = 42
    const selectionRect = isVisible ? getVisibleSelectionRect(window) : undefined
    const editorNode = document.getElementsByClassName("draftjs-web-editor")[0]
    const ecitorPosition = editorNode.getBoundingClientRect()

    if (selectionRect === undefined || selectionRect === null) return

    const top = (selectionRect.top === undefined) ? 0 : (selectionRect.top - ecitorPosition.top) - toolbarHeightOffset
    const left = (selectionRect.left === undefined) ? 0 : selectionRect.left - ecitorPosition.left + (selectionRect.width / 2)
    const position = { top, left }
    this.setState({position})
  }

  openModal = (type) => {
    const modal = this.props.getModalByType(type)
    
    this.setState({ modal }, () => {
      this.setState({ modalVisible: true })
    })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  render () {
    const { store } = this.props
    const { modal, modalVisible, position } = this.state
    let Modal = modal
    let getEditorState = store.getItem('getEditorState')
    let editorState = getEditorState()

    let show = true
    if (!editorState.getSelection().getHasFocus() || editorState.getSelection().isCollapsed() || RichUtils.getCurrentBlockType(editorState) === 'code-block') {
      show = false
    }

    return (
      <OutsideClickHandler onOutsideClick={this.closeModal}>
        <ToolbarWrapper
          show={show}
          style={position}
        >
          { 
            !modalVisible &&
              this.props.structure.map((Component, index) => (
                <Component
                  key={index}
                  getEditorState={store.getItem('getEditorState')}
                  setEditorState={store.getItem('setEditorState')}
                  closeModal={this.closeModal}
                  openModal={this.openModal}
                />
              ))
          }
        </ToolbarWrapper>
        {
          modalVisible &&
            <Modal
              getEditorState={store.getItem('getEditorState')}
              setEditorState={store.getItem('setEditorState')}
              closeModal={this.closeModal}
              openModal={this.openModal}
              position={position}
            />
        }
      </OutsideClickHandler>
    )
  }
}

export default Toolbar