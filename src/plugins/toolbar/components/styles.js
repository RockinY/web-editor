import styled from 'styled-components'

export const ToolbarWrapper = styled.div`
  display: ${p => p.show ? 'flex' : 'none'};
  left: 50%;
  transform: translate(-50%) scale(1);
  position: absolute;
  background-color: #57D9A3;
  border-radius: 12px;
  z-index: 6000;
  box-sizing: border-box;
  overflow: hidden;

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