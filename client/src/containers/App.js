import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Dialog, {
  DialogTitle
} from 'material-ui/Dialog'
import withWidth from 'material-ui/utils/withWidth'

import {
  showDialog,
  hideDialog,
  hideDrawer,
  showDrawer,
  toggleCollapse
} from './../actions/app'
import {
  homePage,
  calendarPage,
  resourcePage,
  contentPage
} from './../actions/nav.js'
import AppBar from './../components/AppBar'
import Drawer from './../components/Drawer'
import Routes from './../routes'
import Footer from './../components/Footer'

const mapStateToProps = state => ({
  isDialogOpen: state.app.isDialogOpen,
  isDrawerOpen: state.app.isDrawerOpen,
  collapsed: state.app.collapsed,
  title: state.app.title
})

const mapDispatchToProps = dispatch => bindActionCreators({
  showDialog,
  hideDialog,
  hideDrawer,
  showDrawer,
  homePage,
  calendarPage,
  resourcePage,
  toggleCollapse,
  contentPage
}, dispatch)

const styles = theme => ({
  '@global': {
    html: {
      height: '100%',
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif'
    },
    body: {
      margin: 0,
      padding: 0
    }
  },
  app: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    justifyContent: 'space-between',
    minHeight: '100vh'
  },
  logo: {
    animation: 'spin infinite 20s linear',
    height: '80px'
  },
  container: {
    marginTop: '64px',
    flex: '1'
  }
})

@withStyles(styles)
@withTheme
@withRouter
@withWidth()
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static displayName = 'App'
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isDialogOpen: PropTypes.bool.isRequired,
    hideDialog: PropTypes.func.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    showDrawer: PropTypes.func.isRequired,
    hideDrawer: PropTypes.func.isRequired,
    homePage: PropTypes.func.isRequired,
    calendarPage: PropTypes.func.isRequired,
    resourcePage: PropTypes.func.isRequired,
    toggleCollapse: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired,
    contentPage: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired
  }

  render () {
    const {classes} = this.props
    return (
      <div className={classes.app}>
        <AppBar
          showDrawer={this.props.showDrawer}
        />
        <Drawer
          open={this.props.isDrawerOpen}
          handleClose={this.props.hideDrawer}
          homePage={this.props.homePage}
          calendarPage={this.props.calendarPage}
          resourcePage={this.props.resourcePage}
          handleCollapse={this.props.toggleCollapse}
          collapsed={this.props.collapsed}
          contentPage={this.props.contentPage}
        />
        <Dialog
          open={this.props.isDialogOpen}
          onRequestClose={this.props.hideDialog}
        >
          <DialogTitle>
            <Typography type='display2'>Dialog!</Typography>
          </DialogTitle>
        </Dialog>
        <div className={classes.container}>
          <Routes />
        </div>
        <Footer
          width={this.props.width}
        />
      </div>
    )
  }
}
