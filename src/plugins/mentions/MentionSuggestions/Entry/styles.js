import styled from 'styled-components'

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
`

export const EntryText = styled.span`
  color: #FFF;
  font-size: 16px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  width: 116px;
`

export const EntryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px;
  width: 150px;
  background: ${props => props.isFocused ? '#172B4D' : '#36B37E' };
`

export const SuggestionWrapper = styled.div`
  border-radius: 5px;
  padding: 5px 0;
  margin-top: 5px;
  position: absolute;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: #36B37E;
  box-shadow: 0px 4px 30px 0px rgba(220,220,220,1);
  z-index: 5000;
`
