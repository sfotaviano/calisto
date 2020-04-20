import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const DrawerHeaderDetails = styled.label`
  height: 64px;
  background: #fff;
  color: #9d9e99;
  font-size: 22px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ButtonPower = styled.button`
  background: none;
  width: 46px;
  height: 46px;
  border-radius: 23px;
  border: 0;
  color:currentColor;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #f0f0f0;
  }
`
export const DrawerHeader = styled.div`
  height: 64px;
  background: #232F3E;
  color: #FFF;
  font-size: 18px;

  display: flex;
  align-items: center;
  padding: 25px;
`
export const DrawerContainer = styled.div`
  max-width: 260px;
  min-width: 260px;
  background: #1b2430;
  height: 100vh;
`
export const DrawerOptions = styled.ul`
  list-style-type: none;
  padding: 10px ;
  
`
export const DrawerOptionDetails = styled.div`
  display: flex;
  padding: 0;
`
