import styled from 'styled-components'

import ListMi from '@material-ui/core/List'
import ListItemMi from '@material-ui/core/ListItem'
import ListItemAvatarMi from '@material-ui/core/ListItemAvatar'
import AvatarMi from '@material-ui/core/Avatar'
import ListItemTextMi from '@material-ui/core/ListItemText'
import IconButtonMi from '@material-ui/core/IconButton'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const List = styled(ListMi)`
  display: flex;
  width: 100%;
  min-width: 720px;
  flex-direction: column;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 0px 10px #f1f1f1;
`
export const ListItem = styled(ListItemMi)`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #fafafa;
  }
`
export const ListItemAvatar = styled(ListItemAvatarMi)`
`
export const Avatar = styled(AvatarMi)`
  background: blue;
`
export const ListItemTextColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const ListItemText = styled(ListItemTextMi)`
`
export const IconButton = styled(IconButtonMi)`
`
