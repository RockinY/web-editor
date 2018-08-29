import React, { Component } from 'react'
import {
  ImageContainer,
  ActiveOverlay,
  Img
} from './styles'

export default class Image extends Component {
  render () {
    const {
      block, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      blockProps, // eslint-disable-line no-unused-vars
      customStyleMap, // eslint-disable-line no-unused-vars
      customStyleFn, // eslint-disable-line no-unused-vars
      decorator, // eslint-disable-line no-unused-vars
      forceSelection, // eslint-disable-line no-unused-vars
      offsetKey, // eslint-disable-line no-unused-vars
      selection, // eslint-disable-line no-unused-vars
      tree, // eslint-disable-line no-unused-vars
      contentState, // eslint-disable-line no-unused-vars
      ...elementProps
    } = this.props;
    const active = blockProps.isFocused;
    const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
    return (
      <ImageContainer active={active}>
        <ActiveOverlay active={active} />
        <Img src={src} active={active} {...elementProps} />
      </ImageContainer>
    );
  }
}