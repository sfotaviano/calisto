import React from 'react'

import { Container, ListSc, ListItemSc, ListItemAvatarSc, AvatarSc, ListItemTextSc } from './styles'
import { CssBaseline } from '@material-ui/core'
import { FiTrash } from 'react-icons/fi'

export default function Users () {
  const arr = [0, 1, 2, 3]

  return (
    <Container>
      <CssBaseline />
      <ListSc>
        {arr.map((item, index) => {
          return (
            <ListItemSc key={index}>
              <ListItemAvatarSc>
                <AvatarSc />
              </ListItemAvatarSc>
              <ListItemTextSc primary={`Usuario numero ${item + 1}`}/>
              <FiTrash size={24} />
            </ListItemSc>
          )
        })}
      </ListSc>
    </Container>
  )
}
