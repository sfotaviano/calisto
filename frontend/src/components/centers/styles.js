import styled from 'styled-components'

import CardMi from '@material-ui/core/Card'

export const Root = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  @media(max-width: 1440px ) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
export const Card = styled(CardMi)`
  display: flex;
  width: 400px;
`
