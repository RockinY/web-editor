import React, { Component } from 'react'
import {
  AspectRatio,
  EmbedComponent,
  EmbedContainer
} from './styles'

class Embed extends Component {
  render() {
    const { block, contentState } = this.props
    const entity = block.getEntityAt(0)
    const data = contentState.getEntity(entity).getData()
    const { src } = data

    if (!src) {
      return null
    }

    return (
      <EmbedContainer>
        <iframe
          title={`iframe-${src}`}
          width="100%"
          allowFullScreen={true}
          frameBorder="0"
          border="0"
          scrolling="no"
          src={src}
        />
      </EmbedContainer>
    )
  }
}

export default Embed