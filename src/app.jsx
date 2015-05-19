'use strict';

(function() {
  var React = require('react');
  var Hello = require('./Hello.jsx');

  React.render(
    <Hello name='React Component' />,
    document.getElementById('app')
  );
})();
