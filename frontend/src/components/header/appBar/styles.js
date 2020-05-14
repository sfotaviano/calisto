import styled from 'styled-components'

import { makeStyles, AppBar, Typography, Toolbar } from '@material-ui/core'

export const AppBarContainer = styled(AppBar)`
  display: flex;
  flex-direction: row;
`
export const ToolbarContainer = styled(Toolbar)`
  width: 100%;

  display: flex;
  justify-content: space-between;
`
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
`
export const LogoText = styled(Typography)`
  margin-left: 20px;
`
export const ProfileMenu = styled.div`
  display: flex;
`
export const Classes = makeStyles((theme) => ({
  zIndex: {
    zIndex: theme.zIndex.drawer + 1
  }
}))
