import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

const Classes = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '1920px',
    height: '1080px'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,

    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '20px'
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
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  paperSearch: {
    width: '920px',

    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default Classes
