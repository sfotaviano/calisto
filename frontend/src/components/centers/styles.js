import { makeStyles } from '@material-ui/core'

const widthPaper = 400

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '5px'
  },
  card: {
    width: `${widthPaper}px`,
    display: 'flex'
  }
}))

export default useStyles
