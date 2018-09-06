import React, { Component } from 'react'
import {
  ImageContainer,
  ActiveOverlay,
  Img
} from './styles'

export default class Image extends Component {
  render () {    
    const {
      block,
      selection,
      blockProps,
      contentState
    } = this.props;

    const active = blockProps.isFocused;

    const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
    return (
      <ImageContainer active={active}>
        <ActiveOverlay active={active} />
        <Img src={src} active={active} />
      </ImageContainer>
    );
  }
}