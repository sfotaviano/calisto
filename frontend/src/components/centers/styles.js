import { makeStyles } from '@material-ui/core'

const widthPaper = 400

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  ul: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  paper: {
    maxWidth: `${widthPaper}px`,
    minWidth: `${widthPaper}px`,
    display: 'flex',
    overflow: 'hidden',
    padding: '20px',
    margin: theme.spacing(1, 1)
  }
}))

export default useStyles
