var React = require('react')

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Title',
      iFrame: '',
      background: ''
    }
  },
  iFrame: function () {
    return {
      __html: this.props.iFrame
    }
  },
  render: function () {
    if (this.props) {
      return (
        <div className='student-jumbo-header z-depth-2' style={{backgroundImage: 'url(' + this.props.background + ')'}}>
          <h1 className='center-align content-title'>{this.props.title}</h1>
          <div className='embed-container'>
            <div className='center-align' dangerouslySetInnerHTML={this.iFrame()} />
          </div>
        </div>
      )
    } else {
      return (
        <div />
      )
    }
  }
})
