'use strict';

var Hello = React.createClass({
  render: function() {
    return (
      <h1>Hello, {this.props.name} World !!!</h1>
    );
  }
});

module.exports = Hello;
