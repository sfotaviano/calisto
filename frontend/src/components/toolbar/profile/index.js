import React from 'react'

import { Container, ButtonIcon } from './styles'
import { Menu, MenuItem, Tooltip } from '@material-ui/core'
import { FiUser } from 'react-icons/fi'

export default function Profile () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Container>
      <Tooltip title='Perfil do usuário'>
        <ButtonIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <FiUser size={24}/>
        </ButtonIcon>
      </Tooltip>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Minha conta</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </Container>
  )
}
