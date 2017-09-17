import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  title: {
    padding: '1em'
  }
})

function AudioComponent (props) {
  const {classes} = props
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>{props.audio.title}</Typography>
          <audio controls>
            <source src={props.audio.path} type='audio/mpeg' />
          </audio>
        </CardContent>
      </Card>
    </Grid>
  )
}

AudioComponent.displayName = 'Content-Audio'
AudioComponent.propTypes = {
  audio: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AudioComponent)
