import React from 'react'

import { Container, ContainerRow } from './styles'
import { Typography, Divider, Button } from '@material-ui/core'

export default function Header (props) {
  const title = props.title
  const title2 = props.title2
  const handleOnClick = props.handleOnClick

  return (
    <Container>
      <ContainerRow>
        <Typography variant='h5'>{title}</Typography>
        <Button onClick={handleOnClick} color="primary">{title2}</Button>
      </ContainerRow>
      <Divider />
    </Container>
  )
}
