import React, { Component } from 'react';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';
import styled from 'styled-components'

const linkify = linkifyIt();
linkify.tlds(tlds);

const StyledLink = styled.a`
  color: #5e93c5;
  text-decoration: none;

  &:visited {
    color: #5e93c5;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: #7eadda;
    outline: 0; /* reset for :focus */
    cursor: pointer;
  }

  &:active {
    color: #4a7bab;
  }
`

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
  render() {
    const {
      decoratedText = ''
    } = this.props

    const links = linkify.match(decoratedText);
    const href = links && links[0] ? links[0].url : '';

    return (
      <StyledLink
        href={href}
        target='_self'
        rel='noreferrer noopener'
      />
    )
  }
}
