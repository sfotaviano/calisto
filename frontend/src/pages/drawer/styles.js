import styled from 'styled-components'

import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

export const Classes = makeStyles((theme) => ({
  root: {
    display: 'flex'
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
    background: 'red',
    padding: theme.spacing(3)
  }
}))
