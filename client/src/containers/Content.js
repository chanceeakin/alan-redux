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

import ContentPics from './../components/ContentPics'
import AudioComponent from './../components/ContentAudio'
import LinkComponent from './../components/ContentLinks'

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
  contentImage: state.app.contentImage,
  contentAudio: state.app.contentAudio,
  contentEsri: state.app.contentEsri,
  contentLink: state.app.contentLink
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
  paper: {
    padding: '2em'
  },
  heroText: {
    color: theme.palette.text.primary,
    padding: '0 0.5em 0.5em'
  },
  header: {
  },
  images: {
    padding: '2em'
  },
  paperImage: {
    background: theme.palette.primary[300],
    padding: '1em'
  },
  imageTitle: {
    paddingBottom: '1em'
  },
  audio: {
    padding: '2em'
  },
  paperAudio: {
    background: theme.palette.primary[700],
    padding: '1em'
  },
  audioTitle: {
    paddingBottom: '1em'
  }
})

@withWidth()
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
    contentImage: PropTypes.array.isRequired,
    contentAudio: PropTypes.array.isRequired,
    contentEsri: PropTypes.array.isRequired,
    contentLink: PropTypes.array.isRequired,
    width: PropTypes.string.isRequired
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
      <Grid container spacing={0} className={classes.root}>
        <Grid
          item xs={12}
          className={classes.hero}
          style={{backgroundImage: `url(${process.env.PUBLIC_URL + this.props.contentBackground})`}}
        >
          <Paper className={classes.paper}>
            {this.props.width === 'xs' || this.props.width === 'sm' ? (
              <Typography
                type='display2'
                color='secondary'
                className={classes.heroText}>
                {this.props.title}
              </Typography>
            ) : (
              <Typography
                type='display4'
                color='secondary'
                className={classes.heroText}>
                {this.props.title}
              </Typography>
            )}
            <div
              className={classes.iframe}
              dangerouslySetInnerHTML={this.iFrame()}
              style={{
                overflow: 'hidden'
              }}
            />

          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.images}>
          <Paper className={classes.paperImage}>
            <Typography type='display1' className={classes.imageTitle}>Pictures for {this.props.title}</Typography>
            <Grid container>
              {this.props.contentImage.map((image, i) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  key={i}
                >
                  <ContentPics
                    image={image}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.audio}>
          <Paper className={classes.paperAudio}>
            <Typography type='display1' className={classes.audioTitle}>Audio for {this.props.title}</Typography>
            <Grid container>
              {this.props.contentAudio
                ? this.props.contentAudio.map(audio => (
                  <AudioComponent
                    key={audio.title}
                    audio={audio}
                  />
                ))
                : null}
            </Grid>
          </Paper>
        </Grid>
        <LinkComponent
          title={this.props.title}
          esri={this.props.contentEsri}
          links={this.props.contentLink}
        />
      </Grid>
    )
  }
}
