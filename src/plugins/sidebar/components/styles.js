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

  label > div,
  label > button > div {
    color: #FFFFFF;
  }
`

export const Expander = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px;
  border-radius: 12px;

  > button > div {
    color: #A3AFBF;
  }

  > button:hover > div {
    color: #57D9A3;
  }

  ${props =>
    props.inserting &&
    css`
      background-color: #57D9A3;
      transition: all 0.2s ease-in;

      > button > div {
        color: #E8E5FF;
      }

      > button:hover > div {
        color: #E8E5FF;
      }

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