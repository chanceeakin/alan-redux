const React = require('react')
const Masonry = require('react-masonry-component')

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Content',
      image: []
    }
  },
  render: function () {
    var mapPics = this.props.image.map(function (pics) {
      return (
        <div className='col s12 m6 l4' key={pics.title}>
          <div className='masonry-item card z-depth-2'>
            <div className='content-card card-image hoverable'>
              <img className='' src={pics.path} />
            </div>
            <div className='card-action'>
              <a href={pics.path}>{pics.title}</a>
            </div>
          </div>
        </div>
      )
    })
    if (this.props) {
      return (
        <div className='row'>
          <h3 className='center-align'>Pictures for {this.props.title}</h3>
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
})
