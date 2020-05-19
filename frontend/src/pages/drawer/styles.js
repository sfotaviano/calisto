import styled from 'styled-components'

import { Divider, makeStyles } from '@material-ui/core'

const drawerWidth = 240

export const HeaderDivider = styled(Divider)`
  margin-top: 24px;
  margin-bottom: 24px;
`
export const Classes = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    display: 'flex'
  }
}))
