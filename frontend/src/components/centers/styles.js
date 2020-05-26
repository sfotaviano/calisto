import { makeStyles } from '@material-ui/core'

const widthPaper = 400

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  containerGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '5px'
  },
  card: {
    display: 'flex',
    width: `${widthPaper}px`
  }
}))

export default useStyles
