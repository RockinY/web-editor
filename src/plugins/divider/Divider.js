import styled from 'styled-components'

const Divider = styled.hr`
  margin-top: 36px;
  margin-bottom: 24px;
  text-align: center;
  border: 0;
  overflow: visible;
  height: 0;

  &:before {
    content: '...';
    display: inline-block;
    margin-left: .6em;
    color: rgba(0,0,0,.68);
    position: relative;
    top: -30px;
    letter-spacing: .6em;
    font-size: 30px;
  }
`

export default Divider;
