import React from 'react'

import { Container, List, ListItem, ListItemAvatar, Avatar, ListItemTextColumn, ListItemText, IconButton, Header, HeaderButton, HeaderButtonItem } from './styles'
import { Chip } from '@material-ui/core'
import { FiDelete, FiEdit, FiEye, FiPlus } from 'react-icons/fi'

import HeaderNew from '../header'

export default function Users () {
  const arr = [0, 1, 2, 3]

  return (
    <Container>
      <HeaderNew
        title="Header"
        title2="button"
        handleOnClick={() => { alert('Funcao funcionou com exito') }}
      />

      <Header>
        <HeaderButton>
          <HeaderButtonItem variant="contained" color="primary">
            <FiPlus size={24}/>
            Novo usuario
          </HeaderButtonItem>
        </HeaderButton>
      </Header>

      <List disablePadding>
        {arr.map((item, index) => {
          return (
            <ListItem divider key={index}>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>

              <ListItemTextColumn>
                <ListItemText primary={`Usuario numero ${item + 1}`}/>
                <ListItemText primary={`Email@mail.com ${item + 1}`}/>
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
    </Container>
  )
}
