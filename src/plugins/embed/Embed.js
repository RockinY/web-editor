import React, { Component } from 'react'
import {
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
        <EmbedComponent
          title={`iframe-${src}`}
          allowFullScreen={true}
          frameBorder="0"
          border="0"
          src={src}
        />
      </EmbedContainer>
    )
  }
}

export default Embed