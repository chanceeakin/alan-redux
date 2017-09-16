import React, {Component} from 'react'
import path from 'path'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import {withStyles} from 'material-ui/styles'
import Card, {CardMedia, CardActions} from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = theme => ({

})

@withStyles(styles)
export default class ContentPics extends Component {
  static displayName = 'Content-Pics'
  static propTypes = {
    image: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }
  static defaultProps = {
    title: 'Content',
    image: []
  }

  render () {
    console.log(process.env)
    const mapPics = this.props.image.map(pics => (
      <Card key={pics.title}>
        {console.log(pics)}
        <CardMedia
          image={path.join(process.env.PUBLIC_URL + pics.path)} />
        <CardActions >
          <a href={pics.path}><Typography>{pics.title}</Typography></a>
        </CardActions>
      </Card>
    ))
    if (this.props.image && this.props.title) {
      return (
        <div className='row'>
          <Typography type='display1'>Pictures for {this.props.title}</Typography>
          <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'ul'} // default 'div'
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {mapPics}
          </Masonry>
        </div>
      )
    }
  }
}
