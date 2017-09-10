import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    width: '100%',
    margin: 0,
    height: '25vh',
    backgroundColor: theme.palette.primary[300]
  }
})

function FooterComponent (props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <Typography className={classes.header} type='display1'>Human Geography</Typography>
    </div>
  )
}

FooterComponent.displayName = 'Footer-Component'
FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FooterComponent)
