'use strict';

(function() {
  var Hello = React.createClass({
    render: function() {
      return (
          <h1>Hello, {this.props.name} !</h1>
      );
    }
  });

  React.render(
    <Hello name='React Component' />,
    document.getElementById('app')
  );
})();
