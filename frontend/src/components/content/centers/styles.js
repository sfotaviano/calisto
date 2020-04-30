import { makeStyles } from '@material-ui/core'

const widthPaper = 400

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  ul: {
    width: '95%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: widthPaper,
    minWidth: widthPaper,
    display: 'flex',
    overflow: 'hidden',
    padding: '20px',
    margin: theme.spacing(1, 1)
  }
}))

export default useStyles
