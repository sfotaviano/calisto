import styled from 'styled-components'

export const Container = styled.header`
  background: #24292e;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`
export const HeaderTitle = styled.h2`
  color: #fff;
  font-size: 18px;

  display: flex;
  align-content: center;
`
export const ButtonRemoveHeader = styled.a`
  color: #fff;

  display: flex;
  align-items: center;

  &:hover {
    color: red;
    cursor: pointer;
  }
`
