import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import SVGIcon from 'material-ui/SvgIcon'

import GithubIcon from './../constants/images/mark-github'

const styles = theme => ({
  root: {
    width: '100%',
    margin: 0,
    minHeight: '25vh',
    backgroundColor: theme.palette.primary[300]
  },
  header: {
    padding: '1em 1em 0'
  },
  email: {
    textDecoration: 'none',
    color: 'inherit'
  },
  duo: {
    padding: '1em .5em'
  },
  endTag: {
    backgroundColor: theme.palette.primary[700],
    marginTop: '2em',
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  endText: {
    lineHeight: '64px',
    color: theme.customColors.footerText,
    textAlign: 'left',
    paddingLeft: '2em'
  },
  icon: {
    alignItems: 'center'
  }
})

function FooterComponent (props) {
  const {classes} = props
  return (
    <Grid
      container
      spacing={0}
      align='flex-end'
      className={classes.root}
      justify='space-between'
    >
      <Grid item xs={12}>
        <Typography className={classes.header} type='display1'>Human Geography</Typography>
      </Grid>
      <Grid item xs={12} md={6} className={classes.duo}>
        <Typography type='headline'>Tutorial Hours</Typography>
        <Typography type='body1'>Wednesdays: 4:20pm-5:20pm</Typography>
        <Typography type='body1'>Thursdays: 4:20pm-5:20pm</Typography>
      </Grid>
      <Grid item xs={12} md={6} className={classes.duo}>
        <Typography type='headline'>Contact</Typography>
        <Typography type='body1'>
          <a className={classes.email} href='mailto:alan.cardon@pfisd.net'>alan.cardon@pfisd.net</a>
        </Typography>
      </Grid>
      <Grid xs={12} item className={classes.endTag}>
        <Typography
          type='headline'
          className={classes.endText}
        >
          © 2017 Alan Cardon and Chance Eakin
        </Typography>
        <SVGIcon className={classes.icon}
          viewBox='0 -4 24 24'
          style={{
            width: '64px',
            height: '64px'
          }}
        >
          <a href='https://github.com/chanceeakin/alan-redux'
          >
            <GithubIcon />
          </a>
        </SVGIcon>
      </Grid>
    </Grid>
  )
}

FooterComponent.displayName = 'Footer-Component'
FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FooterComponent)
