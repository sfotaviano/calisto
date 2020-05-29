import React from 'react'

import {
  Root,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemTextColumn,
  ListItemText,
  IconButton
} from './styles'
import { Chip } from '@material-ui/core'
import { FiDelete, FiEdit, FiEye, FiPlus } from 'react-icons/fi'

import Header from '../header'

export default function Users () {
  const arr = [0, 1, 2, 3]

  return (
    <Root>
      <Header
        headerText="Usuários"
        buttonIcon={<FiPlus size={22} />}
        buttonText="adicionar"
        tooltip="Novo usuário"
        handleClick={() => {
          alert('Mensagem de "Usuarios"')
        }}
      />

      <List disablePadding>
        {arr.map((item, index) => {
          return (
            <ListItem divider key={index}>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>

              <ListItemTextColumn>
                <ListItemText primary={`Usuario numero ${item + 1}`} />
                <ListItemText primary={`Email@mail.com ${item + 1}`} />
              </ListItemTextColumn>

              <Chip size="small" label="Administrador" color="secondary" />

              <div>
                <IconButton>
                  <FiEye size={24} />
                </IconButton>

                <IconButton>
                  <FiEdit size={24} />
                </IconButton>

                <IconButton>
                  <FiDelete size={24} />
                </IconButton>
              </div>
            </ListItem>
          )
        })}
      </List>
    </Root>
  )
}
