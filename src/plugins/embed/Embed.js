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
    const { aspectRatio, src, width = '100%', height = 200 } = data

    if (!src) {
      return null
    }

    if (aspectRatio && aspectRatio !== undefined) {
      return (
        <AspectRatio ratio={aspectRatio}>
          <EmbedComponent
            title={`iframe-${src}`}
            width={width}
            height={height}
            allowFullScreen={true}
            frameBorder="0"
            border="0"
            frameSpacing="0"
            scrolling="no"
            src={src}
          />
        </AspectRatio>
      )
    } else {
      return (
        <EmbedContainer>
          <iframe
            title={`iframe-${src}`}
            width={width}
            height={height}
            allowFullScreen={true}
            frameBorder="0"
            border="0"
            frameSpacing="0"
            scrolling="no"
            src={src}
          />
        </EmbedContainer>
      )
    }
  }
}