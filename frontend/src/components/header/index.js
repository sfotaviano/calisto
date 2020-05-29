/* eslint-disable react/prop-types */
import React from 'react'

import { Root, Container, Divider } from './styles'
import { Typography, Button, Tooltip } from '@material-ui/core'

export default function Header (props) {
  return (
    <Root>
      <Container>
        <Typography variant='h5'>{props.headerText}</Typography>
        <Tooltip title={props.tooltip}>
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleClick}
          >
            {props.buttonIcon}
            {props.buttonText}
          </Button>
        </Tooltip>
      </Container>
      <Divider />
    </Root>
  )
}
