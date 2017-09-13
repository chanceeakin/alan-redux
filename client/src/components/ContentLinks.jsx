var React = require('react')

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Content',
      link: [],
      esri: []
    }
  },
  render: function () {
    return (
      <div className='row container z-depth-2'>
        <div style={{background: 'white', marginBottom: 0}} className='collection'>
          <h3 className='center-align'>{this.props.title} Links</h3>
          {this.props.link.map(function (link) {
            return (
              <div className='center-align' key={link.title}>
                <a className='collection-item teal-text text-darken-4' href={link.path}>{link.title}</a>
              </div>
            )
          })}
          {this.props.esri.map(function (esri) {
            return (
              <div className='center-align' key={esri.title}>
                <a className='collection-item teal-text text-darken-4' href={esri.path}>{esri.title}</a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
})
