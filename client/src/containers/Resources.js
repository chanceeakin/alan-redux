import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'

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
  hero: {
    minHeight: '30vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    maxHeight: '100vh'
  },
  calendar: {
    margin: '2em'
  },
  paper: {
    background: theme.palette.primary[300],
    padding: '5em'
  }
})

@withStyles(styles)
@withTheme
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static displayName = 'Home'
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render () {
    const {classes} = this.props
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.hero}>
          <div className={classes.header}>
            <Typography type='display4' color='secondary'>Resources</Typography>
          </div>
        </Grid>
        <Grid item xs className={classes.calendar}>
          <Paper className={classes.paper}>
            <Typography>Downloads</Typography>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
