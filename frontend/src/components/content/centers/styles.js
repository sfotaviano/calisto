import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    padding: theme.spacing(2),
    margin: theme.spacing(1, 2)
  }
}))

export default useStyles
