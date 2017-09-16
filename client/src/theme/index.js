import 'typeface-roboto'
import {createMuiTheme} from 'material-ui/styles'
import {blueGrey, lightBlue} from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: lightBlue,
    type: 'light',
    text: {
      secondary: 'rgba(255, 255, 255, 0.8)'
    }
  },
  customColors: {
    footerText: '#fdfdfd'
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
