import React from 'react'

import { Container, ContainerRow, Divider } from './styles'
import { Typography, Button } from '@material-ui/core'

export default function Header (props) {
  const headerText = props.headerText
  const buttonIcon = props.buttonIcon
  const buttonText = props.buttonText
  const handleClick = props.handleClick

  return (
    <Container>
      <ContainerRow>
        <Typography variant='h5'>{headerText}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {buttonIcon}
          {buttonText}
        </Button>
      </ContainerRow>
      <Divider />
    </Container>
  )
}
