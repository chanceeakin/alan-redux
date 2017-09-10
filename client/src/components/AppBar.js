import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'

const styles = theme => {
}

function AppBarComponent (props) {
  const {classes} = props
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton
          color='contrast'
          aria-label='Menu'
          onTouchTap={props.showDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography type='title'>AP Human Geography</Typography>
      </Toolbar>
    </AppBar>
  )
}

AppBarComponent.displayName = 'App-Bar-Component'
AppBarComponent.propTypes = {
  showDrawer: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarComponent)
