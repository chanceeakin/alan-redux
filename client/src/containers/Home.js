import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
import Scroll from 'react-scroll'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import AssignmentIcon from 'material-ui-icons/Assignment'
import ViewListIcon from 'material-ui-icons/ViewList'
import SearchIcon from 'material-ui-icons/Search'
import WorkIcon from 'material-ui-icons/Work'
import {withTheme, withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, {CardContent, CardActions} from 'material-ui/Card'
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

const Link = Scroll.Link
const Element = Scroll.Element
const Events = Scroll.Events
const scrollSpy = Scroll.scrollSpy

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
    minHeight: '100vh',
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
  },
  paper: {
    background: theme.palette.primary[200],
    margin: '2em'
  },
  actionHeader: {
    padding: '1em'
  },
  element: {
  },
  card: theme.card,
  tripleCard: {
    margin: '0 2em 2em'
  },
  cardContent: {
    padding: '1em',
    minHeight: '236px'
  },
  contentText: {
    padding: '1em',
    alignSelf: 'center'
  },
  icon: {
    padding: '2em',
    color: theme.palette.secondary[700],
    width: '64px',
    height: '64px'
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
    // showDialog: PropTypes.func.isRequired
  }

  componentDidMount () {
    Events.scrollEvent.register('begin')

    Events.scrollEvent.register('end')
    scrollSpy.update()
  }

  componentWillUnmount () {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  render () {
    const {classes} = this.props
    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} className={classes.hero}>
          <div className={classes.header}>
            <Typography type='display4' color='inherit'>Human Geography</Typography>
          </div>
          <Button
            raised
            className={classes.button}
            color='accent'
          >
            <Link
              activeClass='active'
              to='test1'
              spy
              smooth
              offset={-10}
              duration={500}
            >
              Enter
            </Link>

          </Button>
        </Grid>
        <Grid item xs={12}>
          <Element name='test1' className={classes.element} />
          <Paper className={classes.paper}>
            <Typography className={classes.actionHeader} type='display2'>Mr. Cardon's AP Human Geography</Typography>
            <Grid container direction='row'>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.contentText}
                      type='body1'
                    >
                      Your 2017-2018 Guide to all things AP Human Geography.
                      Follow the links to find study guides, course materials, test and exam preparation, and more.
                      I'm excted to be your guide on this journey that shows us how we arrived where we are today.
                      Human Geography is all around you.
                    </Typography>
                    <Typography
                      className={classes.contentText}
                      type='body1'
                    >
                        If you have any questions, please email me.
                    </Typography>
                    <iframe src='https://www.youtube.com/embed/naK9_JkFAOk' frameBorder='0' allowFullScreen='' />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg>
                <Card className={classes.tripleCard}>
                  <CardContent className={classes.cardContent}>
                    <Typography type='title'>Quizzes</Typography>
                    <AssignmentIcon className={classes.icon} />
                  </CardContent>
                  <CardActions>
                    <Button
                      href='http://lizardpoint.com/geography/world-countries-quiz.php'
                    >
                        Country Quiz
                    </Button>
                    <Button
                      href='https://www.quia.com/shared/geography/'
                    >
                        Geography Games
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg>
                <Card className={classes.tripleCard}>
                  <CardContent className={classes.cardContent}>
                    <Typography type='title'>AP Test Information</Typography>
                    <SearchIcon className={classes.icon} />
                    <Typography type='subheading'>2018 Test Date:</Typography>
                    <Typography>Friday, May 18th 2018</Typography>
                    <Typography>8:00 AM</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href='https://apscore.collegeboard.org/scores?ep_ch=PR&ep_mid=11242583&ep_rid=177437514'
                    >
                        Get Your Score
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg>
                <Card className={classes.tripleCard}>
                  <CardContent className={classes.cardContent}>
                    <Typography type='title'>Helpful Links</Typography>
                    <ViewListIcon className={classes.icon} />
                  </CardContent>
                  <CardActions>
                    <Button
                      href='http://www.pearsonmylabandmastering.com/northamerica/masteringgeography/'
                    >
                        Online Textbook
                    </Button>
                    <Button
                      href='https://apstudent.collegeboard.org/apcourse/ap-human-geography'
                    >
                        Collegeboard Review
                    </Button>
                    <Button
                      href='https://focus.pfisd.net/focus/'
                    >
                        PFISD Focus
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg>
                <Card className={classes.tripleCard}>
                  <CardContent className={classes.cardContent}>
                    <Typography type='title'>Vocabulary</Typography>
                    <WorkIcon className={classes.icon} />
                  </CardContent>
                  <CardActions>
                    <Button
                      href='https://quizizz.com/join/'
                    >
                        Vocab Quizzes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
