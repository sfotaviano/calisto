import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

const Classes = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
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

export default Classes
