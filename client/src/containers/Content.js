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
import {
  homePage,
  contentPage
} from './../actions/nav'

const mapStateToProps = state => ({
  isDialogOpen: state.app.isDialogOpen,
  isDrawerOpen: state.app.isDrawerOpen,
  title: state.app.title,
  contentIFrame: state.app.contentIFrame,
  contentBackground: state.app.contentBackground
})

const mapDispatchToProps = dispatch => bindActionCreators({
  showDialog,
  hideDialog,
  hideDrawer,
  showDrawer,
  homePage,
  contentPage
}, dispatch)

const styles = (theme, props) => ({
  hero: {
    minHeight: '30vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    display: 'flex',
    backgroundSize: '100%',
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
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    homePage: PropTypes.func.isRequired,
    contentPage: PropTypes.func.isRequired,
    contentBackground: PropTypes.string.isRequired
  }

  componentDidMount () {
    switch (this.props.title) {
      case '':
        this.props.homePage()
        break
      case undefined:
        this.props.homePage()
        break
      case 'Nature And Perspective':
        this.props.contentPage('NatureAndPerspective')
        break
      case 'Folk Culture':
        this.props.contentPage('FolkCulture')
        break
      default:
        this.props.contentPage(this.props.title)
        break
    }
  }

  render () {
    const {classes} = this.props
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.hero}>
          <div style={{backgroundImage: `url(${this.props.contentBackground})`}} className={classes.header}>
            <Typography type='display4' color='secondary'>{this.props.title}</Typography>
          </div>
        </Grid>
        <Grid item xs className={classes.calendar}>
          <Paper className={classes.paper}>
            <Typography>{this.props.title} is a test!
            </Typography>
            <img src={this.props.contentBackground} />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
