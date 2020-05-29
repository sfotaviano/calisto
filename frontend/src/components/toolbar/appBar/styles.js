import styled from 'styled-components'

import { makeStyles, AppBar, Toolbar } from '@material-ui/core'
import LinkRr from 'react-router-dom/Link'

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
  align-items: center;
  flex-direction: row;
  margin-right: 24px;
`
export const Link = styled(LinkRr)`
  margin-left: 20px;
  font-size: 22px;
  font-weight: bold;
  color: unset;
  text-decoration: none;

  &:hover {
    color: #87ceeb;
    text-decoration: underline;
  }
`
export const Classes = makeStyles((theme) => ({
  zIndex: {
    zIndex: theme.zIndex.drawer + 1
  }
}))
