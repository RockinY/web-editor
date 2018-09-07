import styled from 'styled-components'

export const EmbedContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
`;

export const AspectRatio = styled(EmbedContainer)`
  padding-bottom: ${props => (props.ratio ? props.ratio : '0')};
`;

export const EmbedComponent = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`;