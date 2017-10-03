import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
  MuiThemeProvider
} from 'material-ui/styles'
import App from './containers/App'
import theme from './theme'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-86915404-4')

function logPageView () {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const target = document.querySelector('#root')

injectTapEventPlugin()

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter
        onUpdate={logPageView}
        history={history}
      >
        <App />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  target
)
