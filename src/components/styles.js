// @flow
import styled, { css, keyframes } from 'styled-components'

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
  
  &:hover {
    transition: all 0.2s ease-in;
    box-shadow: ${props =>
      props.disabled
        ? 'none'
        : `0 8px 16px rgba(23, 43, 77, 0.15)`};
    opacity: ${props => (props.disabled ? '0.5' : '1')};
  }

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
  color: ${props =>
    props.disabled
      ? '#DFE7EF'
      : '#828C99'};
  opacity: ${props => (props.opacity ? props.opacity : 1)};

  &:hover {
    color: ${props =>
      props.disabled
        ? '#DFE7EF'
        : '#57D9A3'};
    box-shadow: none;
    opacity: 1;
  }
`


export const blinkBorder = keyframes`
0% {
  border-color: transparent;
}
49% {
  border-color: transparent;
}
50% {
  border-color: black;
}
100% {
  border-color: black;
}
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 12px 0;
  pointer-events: none;
  ${props =>
    props.active &&
    css`
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(54, 179, 126, 0.2);
    `} transition: all 0.1s ease-in-out;
`;

export const ActiveOverlay = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(54, 179, 126, 0.1);
  border-radius: 8px;
  border: 1px solid #36B37E;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.1s ease-in-out;
`;

const Img = styled.img`
  ${props =>
    props.active &&
    css`
      /* Pretend like there's a cursor next to the image when active */
      box-shadow: inset -1px 0 0 #000;
      animation: ${blinkBorder} 1s infinite;
    `} max-width: 100%;
`;
