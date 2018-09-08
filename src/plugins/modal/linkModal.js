import React, {Component} from 'react'
import {hasEntity, setEntity, getCurrentEntity, removeEntity} from './entity'
import linkifyIt from 'linkify-it'
import tlds from 'tlds'
import { ToolbarWrapper } from '../toolbar/components/styles'
import {
  LinkInput
} from './styles'
import { IconButton } from '../../components/Button'

const linkify = linkifyIt({ fuzzyIP: false })
linkify.tlds(tlds)

class Link extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: props && props.url || '',
      error: null
    }
  }

  onUrlChange = (event) => {
    event.stopPropagation()
    const url = event.target.value
    if (url === '') { this.cancelError() }
    this.setState({url})
  }

  setUrl = (event) => {
    this.submitUrl(this.state.url)
  }

  setError = (errorMsg) => {
    this.setState({error: errorMsg})
  }

  cancelError = () => {
    this.setState({error: null})
  }

  submitUrl = (url) => {
    let match = linkify.match(url) 

    if (match === null) {
      this.setError(('无效的链接'))
      return
    }

    let matchedUrl = match[0].url
    this.setState({url: matchedUrl})
    setEntity('LINK', {url: matchedUrl}, this.props.getEditorState(), this.props.setEditorState)
    this.props.closeModal()
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setUrl()
  }

  onCancel = (event) => {
    event.preventDefault()
    if (this.props.entitySelected) {
      removeEntity('LINK', this.props.getEditorState(), this.props.setEditorState)
    }
    this.cancelError()
    this.props.closeModal()
  }

  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.setUrl()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      this.props.closeModal()
    }
  }

  render () {
    const { theme, entitySelected, position } = this.props
    const { error } = this.state

    return (
      <ToolbarWrapper style={position} show={true}>
        <LinkInput
          autoFocus
          type='text'
          onChange={this.onUrlChange}
          value={this.state.url}
          onKeyDown={this.onKeyDown}
          placeholder='输入链接地址'
        />
        <IconButton 
          glyph='ok'
          onClick={this.onSubmit}
          tipText="确认"
          tipLocation="top"
          size={24}
        />
        <IconButton 
          glyph='cancel'
          onClick={this.onCancel}
          tipText="取消"
          tipLocation="top"
          size={24}
        />
      </ToolbarWrapper>
    )
  }
}


export default class extends Component {
  render () {
    const editorState = this.props.getEditorState()
    const entitySelected = hasEntity('LINK', editorState)
    const entity = getCurrentEntity(editorState)
    let entityData = null

    if (entitySelected) {
      if (entity) { entityData = entity.getData() }
    }
    let url = entityData ? entityData.url : null

    return (
      <Link
        url={url}
        entitySelected={entitySelected}
        {...this.props}
      />
    )
  }
}