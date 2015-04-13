'use strict';

(function() {
  var Hello = React.createClass({displayName: "Hello",
    render: function() {
      return (
          React.createElement("h1", null, "Hello, ", this.props.name, " !")
      );
    }
  });

  React.render(
    React.createElement(Hello, {name: "React Component"}),
    document.getElementById('app')
  );
})();
