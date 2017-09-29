import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import withWidth from 'material-ui/utils/withWidth'

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
  title: {
    color: theme.palette.text.primary
  },
  calendar: {
    margin: '2em'
  },
  paper: {
    background: theme.palette.primary[300],
    padding: '2em'
  }
})

@withStyles(styles)
@withTheme
@withRouter
@withWidth()
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static displayName = 'Home'
  static propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
  }

  render () {
    let iFrameSize
    switch (this.props.width) {
      case 'xs':
        iFrameSize = {
          x: 250,
          y: 200
        }
        break
      case 'sm':
        iFrameSize = {
          x: 450,
          y: 300
        }
        break
      case 'md':
        iFrameSize = {
          x: 600,
          y: 400
        }
        break
      case 'lg':
        iFrameSize = {
          x: 800,
          y: 600
        }
        break
      case 'xl':
        iFrameSize = {
          x: 1000,
          y: 800
        }
        break
    }
    const {classes} = this.props
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.hero}>
          {this.props.width === 'xs' || this.props.width === 'sm' ? (
            <Typography
              type='display2'
              className={classes.title}
            >
              Calendar
            </Typography>
          ) : (
            <Typography
              type='display4'
              className={classes.title}
            >
              Calendar
            </Typography>
          )}
        </Grid>
        <Grid item xs className={classes.calendar}>
          <Paper className={classes.paper}>
            <iframe
              src='https://calendar.google.com/calendar/embed?src=alan.cardon%40pfisd.net&amp;ctz=America/Chicago'
              width={iFrameSize.x}
              height={iFrameSize.y}
              frameBorder='0'
              scrolling='no'
              style={{border: '0px'}}
            />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
