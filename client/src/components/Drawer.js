import React from 'react'
import PropTypes from 'prop-types'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
// import ExpandLess from 'material-ui-icons/ExpandLess'
// import ExpandMore from 'material-ui-icons/ExpandMore'

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
        <ListItem inset onTouchTap={() => props.contentPage('Agriculture')}>
          <ListItemText primary='Agriculture' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Development')}>
          <ListItemText primary='Development' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Ethnicity')}>
          <ListItemText primary='Ethnicity' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('FolkCulture')}>
          <ListItemText primary='Folk Culture' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Industry')}>
          <ListItemText primary='Industry' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Language')}>
          <ListItemText primary='Language' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Migration')}>
          <ListItemText primary='Migration' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('NatureAndPerspective')}>
          <ListItemText primary='Nature and Perspective' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Political')}>
          <ListItemText primary='Political' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Population')}>
          <ListItemText primary='Population' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Religion')}>
          <ListItemText primary='Religion' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Services')}>
          <ListItemText primary='Services' />
        </ListItem>
        <ListItem inset onTouchTap={() => props.contentPage('Urban')}>
          <ListItemText primary='Urban' />
        </ListItem>
      </List>
    </Drawer>
  )
}

DrawerComponent.displayName = 'Drawer-Component'
DrawerComponent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  // collapsed: PropTypes.bool.isRequired,
  // handleCollapse: PropTypes.func.isRequired,
  homePage: PropTypes.func.isRequired,
  calendarPage: PropTypes.func.isRequired,
  resourcePage: PropTypes.func.isRequired,
  contentPage: PropTypes.func.isRequired
}

export default withStyles(styles)(DrawerComponent)
