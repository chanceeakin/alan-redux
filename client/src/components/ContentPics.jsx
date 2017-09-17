import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardMedia, CardActions} from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  media: {
    minHeight: 350
  }
})

@withStyles(styles)
export default class ContentPics extends Component {
  static displayName = 'Content-Pics'
  static propTypes = {
    image: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  }
  static defaultProps = {
    title: 'Content',
    image: {}
  }

  render () {
    const {image} = this.props
    return (
      <Card key={image.title} className={this.props.classes.card}>
        <CardMedia
          className={this.props.classes.media}
          image={image.path}
          title={image.title}
        />
        <CardActions >
          <a href={image.path}>
            <Typography>{image.title}</Typography>
          </a>
        </CardActions>
      </Card>
    )
  }
}
