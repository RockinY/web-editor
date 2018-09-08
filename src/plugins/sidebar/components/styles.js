import React from 'react'
import styled, { css } from 'styled-components'

export const SidebarWrapper = styled.div`
  display: inherit;
  transform: scale(${props => props.show ? '1' : '0'});
  opacity: ${props => props.show ? 1 : 0};
  transition: transform 0.1s;
  position: fixed;
  margin-top: -8px;
  z-index: 2000;
`

export const Action = styled.div`
  display: flex;
  flex: 0 0 32px;
  flex-direction: column;
  height: 32px;
  max-height: 32px;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  transform: scale(0);
  width: 0;
`

export const Expander = styled.div`
  display: flex;
  padding: 4px;

  button > div {
    color: #A3AFBF;
  }

  button:hover > div {
    color: #57D9A3;
  }
  
  > button:first-of-type {
    margin-right: 10px;
  }

  ${props =>
    props.inserting &&
    css`
      ${Action} {
        transform: scale(1);
        transition: transform 0.2s;
        width: 32px;
      }
    `
  }
`

export const MediaInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const MediaLabel = styled.label`
  border: none;
  outline: 0;
  display: inline-block;
  background: transparent;
  transition: color 0.3s ease-out;
  color: #A3AFBF;
  height: 32px;
  width: 32px;

  &:hover {
    cursor: pointer;
    color: #57D9A3;
  }
`;

export const EmbedContainer = styled.div`
  height: 32px;
  display: flex;
`

export const EmbedInput = styled.input`
  height: 32px;
  width: 200px;
  font-size: 16px;
  color: #A3AFBF;
  border-bottom: 1px solid #A3AFBF;
`