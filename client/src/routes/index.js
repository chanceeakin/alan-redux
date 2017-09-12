import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router-dom'
import asyncComponent from './../components/Async-Component'

const Home = asyncComponent(() => import('./../containers/Home'))
const Calendar = asyncComponent(() => import('./../containers/Calendar'))
const Resources = asyncComponent(() => import('./../containers/Resources'))
const Content = asyncComponent(() => import('./../containers/Content'))

const Routes = ({match, childProps}) => (
  <Switch>
    <Route
      exact
      path={'/'}
      component={Home}
    />
    <Route
      path={'/calendar'}
      component={Calendar}
    />
    <Route
      path={'/resources'}
      component={Resources}
    />
    <Route
      path={'/pages/:name'}
      component={Content}
    />
  </Switch>
)

Routes.propTypes = {
  childProps: PropTypes.object,
  match: PropTypes.object
}

export default Routes
