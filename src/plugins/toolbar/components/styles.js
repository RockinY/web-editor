import styled from 'styled-components'

export const ToolbarWrapper = styled.div`
  display: ${p => p.show ? 'flex' : 'none'};
  left: 50%;
  transform: translate(-50%) scale(1);
  position: absolute;
  border: 1px solid #ddd;
  background: #fff;
  z-index: 6000;
  box-sizing: border-box;
`