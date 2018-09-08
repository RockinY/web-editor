import React, { Component } from 'react';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = linkifyIt();
linkify.tlds(tlds);

// The component we render when we encounter a hyperlink in the text
class Link extends Component {
  render() {
    const { contentState, entityKey, children } = this.props

    const entity = contentState.getEntity(entityKey).getData()
    const links = linkify.match(entity.url)
    const href = links && links[0] ? links[0].url : ''

    return (
      <a
        href={href}
        target="_blank"
        rel='noreferrer noopener'
      >
        {children}
      </a>
    )
  }
}

export default Link