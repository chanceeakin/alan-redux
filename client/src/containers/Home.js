import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import Grid from 'material-ui/Grid'
import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
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

  },
  hero: {
    background: `url(${Camels}) ${theme.palette.primary[50]}`,
    backgroundSize: 'cover',
    minHeight: '75vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
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
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.hero}>
          <div className={classes.header}>
            <Typography type='display4' color='secondary'>Human Geography</Typography>
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
        </Grid>
        <Grid item xs={12}>
          <Typography type='display2'>Mr. Cardon's AP Human Geography</Typography>
          <Grid>
            <Grid item xs={12}>
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
