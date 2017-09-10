import 'typeface-roboto'
import {createMuiTheme} from 'material-ui/styles'
import {blueGrey, fullWhite} from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: fullWhite
  },
  overrides: {
  },
  card: {
    margin: '2em'
  },
  cardContent: {
    padding: '1em'
  }
})

export default theme
