import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import ContentPics from './../components/ContentPics'

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
  contentBackground: state.app.contentBackground,
  contentImage: state.app.contentImage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  showDialog,
  hideDialog,
  hideDrawer,
  showDrawer,
  homePage,
  contentPage
}, dispatch)

const styles = (theme) => ({
  hero: {
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    display: 'flex',
    backgroundSize: '100%',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%'
  },
  heroText: {
    color: theme.palette.text.primary,
    padding: '0.5em'
  },
  header: {
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
@connect(mapStateToProps, mapDispatchToProps)
export default class ContentPage extends Component {
  static displayName = 'Content-Page'
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    homePage: PropTypes.func.isRequired,
    contentPage: PropTypes.func.isRequired,
    contentBackground: PropTypes.string.isRequired,
    contentIFrame: PropTypes.string.isRequired,
    contentImage: PropTypes.array.isRequired
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

  iFrame () {
    return {
      __html: this.props.contentIFrame
    }
  }

  render () {
    const {classes} = this.props
    return (
      <Grid container className={classes.root}>
        <Grid
          item xs={12}
          className={classes.hero}
          style={{backgroundImage: `url(${process.env.PUBLIC_URL + this.props.contentBackground})`}}
        >
          <Paper className={classes.paper}>
            <Typography type='display4' color='secondary' className={classes.heroText}>{this.props.title}</Typography>
            <div className={classes.iframe} dangerouslySetInnerHTML={this.iFrame()} />
          </Paper>
        </Grid>
        <Grid item xs className={classes.calendar}>
          <Paper className={classes.paper}>
            <ContentPics
              title={this.props.title}
              image={this.props.contentImage}
            />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
