import React from 'react'
import PropTypes from 'prop-types'

import Drawer from 'material-ui/Drawer'
// import Button from 'material-ui/Button'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionHome from 'material-ui-icons/Home'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles'

const styles = theme => ({
  root: {
  },
  header: {
    margin: '0',
    textAlign: 'center',
    height: '64px',
    lineHeight: '64px',
    width: '250px'
  }
})

function DrawerComponent (props) {
  const {classes} = props
  return (
    <Drawer
      className={classes.root}
      open={props.open}
      onRequestClose={props.handleClose}
      onClick={props.handleClose}
    >
      <Typography className={classes.header} type='display1'>Menu</Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <ActionHome />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </List>
    </Drawer>
  )
}

DrawerComponent.displayName = 'Drawer-Component'
DrawerComponent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DrawerComponent)
