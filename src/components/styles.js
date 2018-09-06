// @flow
import styled, { css } from 'styled-components'
import { colors } from '../theme'

const baseButton = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 0;
  outline: 0;
  font-weight: 600;
  white-space: nowrap;
  word-space: keep-all;
  transition: all 0.2s ease-out;
  cursor: pointer;
  font-size: ${props => props.large ? '18px' : '14px'};
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props =>
    props.icon
      ? props.large ? '8px 12px' : '4px 8px'
      : props.large ? '16px 32px' : '12px 16px'};

  /* if an icon and label are both present, add space around the label*/
  div + span,
  span + span {
    margin: 0 8px;
  }
`

export const StyledIconButton = styled.button`
  ${baseButton} padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: colors.reverse;
  opacity: ${props => (props.opacity ? props.opacity : 1)};

  &:hover {
    color: colors.reverse;
    box-shadow: none;
    opacity: 1;
  }
`
