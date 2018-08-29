import React from 'react'
import styled, { css } from 'styled-components'

export const SidebarWrapper = styled.div`
  position: fixed;
  margin-top: -8px;
  z-index: 2000;
`

export const Action = styled.div`
  display: ${props => props.embedding ? 'flex' : 'none'};
  flex: 0 0 40px;
  flex-direction: column;
  height: 40px;
  max-height: 40px;
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