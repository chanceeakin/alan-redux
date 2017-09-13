var React = require('react')
var axios = require('axios')
var ContentMenu = require('../partials/ContentMenu.jsx')
var StudentJumbo = require('../partials/StudentJumbotron.jsx')
var Footer = require('../partials/Footer.jsx')
var ContentPics = require('../partials/ContentPics.jsx')
var ContentLinks = require('../partials/ContentLinks.jsx')
var ContentAudio = require('../partials/ContentAudio.jsx')

module.exports = React.createClass({
  getInitialState: function () {
    return {
      title: '',
      path: '',
      iFrame: '',
      background: '',
      image: [],
      link: [],
      esri: [],
      audio: [],
      loops: 0
    }
  },
  axiosCall: function (path) {
    var that = this
    axios.get('/api/' + path)
      .then(function (response) {
        if (response.status !== 200) {
          console.log('ERR')
          throw response
        }
        that.setState({
          title: response.data.title,
          path: response.data.path,
          iFrame: response.data.video.path,
          background: response.data.background,
          image: response.data.image,
          link: response.data.link,
          esri: response.data.esri,
          audio: response.data.audio
        })
      })
    window.scroll(0, 0)
  },
  componentDidMount: function () {
    this.axiosCall(this.props.params.path)
  },
  shouldComponentUpdate: function () {
    if (this.props.params.path === this.state.path) {
      return false
    }
    if (this.props.params.path !== this.state.path) {
      return true
    }
  },
  componentWillUpdate: function () {
    this.axiosCall(this.props.params.path)
  },
  newChange: function (newPage) {
    this.axiosCall(newPage)
  },
  render: function () {
    return (
      <div>
        <ContentMenu
          path={this.state.path}
          onChange={this.newChange}
        />
        <StudentJumbo
          title={this.state.title}
          iFrame={this.state.iFrame}
          background={this.state.background}
        />
        <ContentPics
          title={this.state.title}
          image={this.state.image}
        />
        <div className='row' />
        <ContentAudio
          title={this.state.title}
          audio={this.state.audio}
        />
        <ContentLinks
          title={this.state.title}
          link={this.state.link}
          esri={this.state.esri}
        />
        <div className='row' />
        <Footer />
      </div>
    )
  }
})
