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
      contentState
    } = this.props;

    const focusKey = selection.getFocusKey()
    const blockKey = block.getKey()

    console.log(focusKey);
    
    
    let active = false
    if (focusKey === blockKey) {
      active = true
    }
    const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
    return (
      <ImageContainer active={active}>
        <ActiveOverlay active={active} />
        <Img src={src} active={active} />
      </ImageContainer>
    );
  }
}