import styled, { keyframes } from 'styled-components'

export const ToolbarWrapper = styled.div`
  display: ${p => p.show ? 'flex' : 'none'};
  left: 50%;
  height: 32px;
  transform: translate(-50%) scale(1);
  position: absolute;
  background-color: #57D9A3;
  z-index: 6000;
  padding: 0 5px;
  border-radius: 5px;
  box-sizing: border-box;

  button,
  button:hover {
    color: #FFFFFF;
  }

  &:before {
    content: '';
    z-index: 6002;
    border: 6px solid transparent;
    line-height: 1;
    user-select: none;
    pointer-events: none;
    position: absolute;
    display: block;
    text-transform: none;
    bottom: calc(100% - 38px);
    left: 50%;
    transform: translateX(-50%);
    border-bottom-width: 0;
    border-top-color: #57D9A3;
  }
`

export const popUpwards = keyframes`
  0% {
    opacity: 0;
    transform: matrix(.97,0,0,1,0,12);
  }
  20% {
    opacity: 0.7;
    transform: matrix(.99,0,0,1,0,2);
  }
  40% {
    opacity: 1;
    transform: matrix(1,0,0,1,0,-1);
  }
  70% {
    opacity: 1;
    transform: matrix(1,0,0,1,0,0);
  }
  100% {
    opacity: 1;
    transform: matrix(1,0,0,1,0,0);
  }
`;