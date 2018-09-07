import styled from 'styled-components'

export const EmbedContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  padding-bottom: 56.25%;
`;

export const EmbedComponent = styled.iframe`
  position: absolute;
  top: 0; 
  left: 0;
  height: 100%;
  width: 100%;
`;