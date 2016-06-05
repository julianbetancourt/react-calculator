var React = require('react');
var Calculator = require('./Calculator');

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
})

module.exports = App;
