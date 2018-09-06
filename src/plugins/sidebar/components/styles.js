import React from 'react'
import styled, { css } from 'styled-components'

export const SidebarWrapper = styled.div`
  display: ${props => props.show ? 'inherit' : 'none'};
  position: fixed;
  margin-top: -8px;
  z-index: 2000;
`

export const Action = styled.div`
  display: ${props => props.embedding ? 'flex' : 'none'};
  flex: 0 0 32px;
  flex-direction: column;
  height: 32px;
  max-height: 32px;
  justify-content: center;
  align-items: flex-start;
  position: relative;
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

  button:first-of-type {
    margin-right: 5px;
  }

  ${props =>
    props.inserting &&
    css`
      transition: all 0.2s ease-in;

      ${Action} {
        display: flex;
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