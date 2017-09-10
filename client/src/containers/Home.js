import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Camels from './../constants/images/camels.jpg'

import {
  showDialog,
  hideDialog,
  hideDrawer,
  showDrawer
} from './../actions/app'

const mapStateToProps = state => ({
  isDialogOpen: state.app.isDialogOpen,
  isDrawerOpen: state.app.isDrawerOpen
})

const mapDispatchToProps = dispatch => bindActionCreators({
  showDialog,
  hideDialog,
  hideDrawer,
  showDrawer
}, dispatch)

const styles = theme => ({
  root: {
    background: `url(${Camels}) ${theme.palette.primary[50]}`,
    backgroundSize: 'cover',
    textAlign: 'center',
    display: 'flex',
    minHeight: '75vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    maxHeight: '100vh'
  },
  intro: {
    fontSize: 'large'
  },
  button: {
    margin: '1em'
  }
})

@withStyles(styles)
@withTheme
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static displayName = 'Home'
  static propTypes = {
    classes: PropTypes.object.isRequired,
    showDialog: PropTypes.func.isRequired
  }

  render () {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography type='display4' color='default'>Human Geography</Typography>
        </div>
        <Button
          raised
          className={classes.button}
          color='primary'
          onTouchTap={() => this.props.showDialog()}
        >
          Click me!
        </Button>
        <Typography className={classes.intro} color='default'>
          If you can't tell how to get started from all the breadcrumbs, IDK what to tell you.
        </Typography>
      </div>
    )
  }
}
