import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

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
  content: {
    display: 'flex'
  }
}))
