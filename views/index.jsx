var React = require('react')

var HelloMessage = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function () {
    return <div>Hello {this.props.name}</div>
  }
})

module.exports = HelloMessage
