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
  margin-right: 80px;
`
export const LogoText = styled(Typography)`
  margin-left: 20px;
  
  &:hover {
    cursor: pointer;
    color: red;
    border-bottom-width: 1;
  }
`
export const Classes = makeStyles((theme) => ({
  zIndex: {
    zIndex: theme.zIndex.drawer + 1
  }
}))
