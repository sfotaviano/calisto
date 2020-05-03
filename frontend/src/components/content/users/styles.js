import styled from 'styled-components'

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core'

var w = window.innerWidth

export const Container = styled.div`
  display: flex;
  padding: 10px;
  width: ${w - 240}px;
`
export const ListSc = styled(List)`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
`
export const ListItemSc = styled(ListItem)`
  display: flex;
  justify-content: space-between;
`
export const ListItemAvatarSc = styled(ListItemAvatar)`
`
export const AvatarSc = styled(Avatar)`
`
export const ListItemTextSc = styled(ListItemText)`
`
