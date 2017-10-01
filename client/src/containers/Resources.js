import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import Grid from 'material-ui/Grid'
import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
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
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: theme.palette.text.primary
  },
  paper: {
    background: theme.palette.primary[300],
    padding: '5em'
  }
})

@withStyles(styles)
@withWidth()
@withTheme
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static displayName = 'Home'
  static propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
  }

  render () {
    const {classes} = this.props
    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} className={classes.hero}>
          <div className={classes.header}>
            {this.props.width === 'xs' || this.props.width === 'sm' ? (
              <Typography
                type='display2'
                className={classes.title}
              >
                Resources
              </Typography>
            ) : (
              <Typography
                type='display4'
                className={classes.title}
              >
                Resources
              </Typography>
            )}
          </div>
          <Button
            href='https://drive.google.com/open?id=0B-4Lkr3x2FheaVNtZjQ3UDYxYTA'
            raised
            color='primary'
          >
            Google Drive
          </Button>
          <Button
            href='/downloads/sq3rAlt'
            raised
            color='primary'
          >
            Reading Worksheet
          </Button>
          <Button
            href='/downloads/syllabus'
            raised
            color='primary'
          >
            Syllabus
          </Button>
          <Button
            href='/downloads/sq3rAdvanced'
            raised
            color='primary'
          >
            Advanced Reading Worksheet
          </Button>
          <Typography className={classes.title} type='display1'>More Coming Soon...</Typography>
        </Grid>
      </Grid>
    )
  }
}
