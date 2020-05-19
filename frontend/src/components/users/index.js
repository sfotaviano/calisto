import React from 'react'

import { Container, List, ListItem, ListItemAvatar, Avatar, ListItemTextColumn, ListItemText, IconButton } from './styles'
import { Chip } from '@material-ui/core'
import { FiDelete, FiEdit, FiEye } from 'react-icons/fi'

export default function Users () {
  const arr = [0, 1, 2, 3]

  return (
    <Container>
      <List >
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
