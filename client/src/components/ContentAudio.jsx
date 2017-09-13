var React = require('react')

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Content',
      audio: []
    }
  },
  render: function () {
    return (
      <div className='center-align row container z-depth-2'>
        <div style={{background: 'white', marginBottom: 0}} className='collection'>
          <h3>{this.props.title} Audio</h3>
          {this.props.audio.map(function (audio) {
            return (
              <div className='collection-item' key={audio.title}>
                <h5>{audio.title}</h5>
                <audio controls>
                  <source src={audio.path} type='audio/mpeg' />
                </audio>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
})
