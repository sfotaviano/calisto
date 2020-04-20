import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  padding: 10px;
  align-items: center;
  box-sizing: content-box;
  background: none;
  border-radius: 2px; 

  &:hover {
      background: #f0f0f0;
  }
`

export const InputSearch = styled.input`
  border: 0;
  font-size: 14px;
  background: none;
  margin-left: 10px;
`
