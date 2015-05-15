'use strict';

(function() {
  var Hello = require('./Hello.jsx');

  React.render(
    <Hello name='React Component' />,
    document.getElementById('app')
  );
})();
