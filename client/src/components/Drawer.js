import React from 'react'
import PropTypes from 'prop-types'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Collapse from 'material-ui/transitions/Collapse'
// import ExpandLess from 'material-ui-icons/ExpandLess'
// import ExpandMore from 'material-ui-icons/ExpandMore'
import StarBorder from 'material-ui-icons/StarBorder'

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
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset primary='Content' onTouchTap={() => props.handleCollapse()} />
        </ListItem>
        <Collapse in transitionDuration='auto' unmountOnExit>
          <ListItem onTouchTap={() => props.contentPage('Agriculture')}>
            <ListItemText inset primary='Agriculture' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Development')}>
            <ListItemText inset primary='Development' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Ethnicity')}>
            <ListItemText inset primary='Ethnicity' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('FolkCulture')}>
            <ListItemText inset primary='Folk Culture' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Industry')}>
            <ListItemText inset primary='Industry' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Language')}>
            <ListItemText inset primary='Language' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Migration')}>
            <ListItemText inset primary='Migration' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('NatureAndPerspective')}>
            <ListItemText inset primary='Nature and Perspective' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Political')}>
            <ListItemText inset primary='Political' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Population')}>
            <ListItemText inset primary='Population' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Religion')}>
            <ListItemText inset primary='Religion' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Services')}>
            <ListItemText inset primary='Services' />
          </ListItem>
          <ListItem onTouchTap={() => props.contentPage('Urban')}>
            <ListItemText inset primary='Urban' />
          </ListItem>
        </Collapse>
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
  handleCollapse: PropTypes.func.isRequired,
  homePage: PropTypes.func.isRequired,
  calendarPage: PropTypes.func.isRequired,
  resourcePage: PropTypes.func.isRequired,
  contentPage: PropTypes.func.isRequired
}

export default withStyles(styles)(DrawerComponent)
