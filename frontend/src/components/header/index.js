import React from 'react'

import { Container, ContainerRow } from './styles'
import { Typography, Divider } from '@material-ui/core'

export default function Header () {
  return (
    <Container>
      <ContainerRow>
        <Typography variant='h5'>Bem vindo, Samuel Fernandes</Typography>
      </ContainerRow>
      <Divider />
    </Container>
  )
}
