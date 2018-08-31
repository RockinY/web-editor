import styled from 'styled-components'

export const ToolbarWrapper = styled.div`
  display: ${p => p.show ? 'flex' : 'none'};
  left: 50%;
  transform: translate(-50%) scale(1);
  position: absolute;
  padding: 4px;
  background-color: #57D9A3;
  border-radius: 12px;
  z-index: 6000;
  box-sizing: border-box;

  button,
  button:hover {
    color: #FFFFFF;
  }
`