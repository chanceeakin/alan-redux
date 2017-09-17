import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemText} from 'material-ui/List'

const styles = theme => ({
  root: {
    padding: '2em'
  },
  paper: {
    background: theme.palette.primary[400],
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  list: {
    margin: '2em',
    width: '100%',
    maxWidth: 500,
    background: theme.palette.background.paper,
    textAlign: 'center'
  },
  item: {
    textDecoration: 'none'
  }
})

function LinkComponent (props) {
  return (
    <Grid item xs={12} className={props.classes.root}>
      <Paper className={props.classes.paper}>
        <Typography type='display1'>{props.title} Links</Typography>
        <List className={props.classes.list}>
          {props.links.map((link, i) => (
            <a href={link.path} key={i} className={props.classes.item}>
              <ListItem button>
                <ListItemText
                  primary={link.title}
                />
              </ListItem>
            </a>
          ))}
          {props.esri.map((esri, i) => (
            <a href={esri.path} key={i} className={props.classes.item}>
              <ListItem button>
                <ListItemText
                  primary={esri.title}
                />
              </ListItem>
            </a>
          ))}
        </List>
      </Paper>
    </Grid>
  )
}

LinkComponent.displayName = 'Link-Component'
LinkComponent.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  esri: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LinkComponent)
