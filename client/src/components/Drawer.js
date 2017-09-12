import React from 'react'
import PropTypes from 'prop-types'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionHome from 'material-ui-icons/Home'
import CalendarIcon from 'material-ui-icons/DateRange'
import DescriptionIcon from 'material-ui-icons/Description'
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
        <ListItem onTouchTap={() => props.homePage()}>
          <ListItemIcon>
            <ActionHome />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem onTouchTap={() => props.calendarPage()}>
          <ListItemIcon>
            <CalendarIcon />
          </ListItemIcon>
          <ListItemText primary='Calendar' />
        </ListItem>
        <ListItem onTouchTap={() => props.resourcePage()}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary='Resources' />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  )
}

DrawerComponent.displayName = 'Drawer-Component'
DrawerComponent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  homePage: PropTypes.func.isRequired,
  calendarPage: PropTypes.func.isRequired,
  resourcePage: PropTypes.func.isRequired
}

export default withStyles(styles)(DrawerComponent)
