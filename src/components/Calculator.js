var React = require('react');
var Calculations = require('./Calculations');
var Buttons = require('./Buttons');

var Calculator = React.createClass({
  render: function () {
    return (
      <div className="calculator">
        <Calculations />
        <Buttons />
      </div>
    );
  }
});

module.exports = Calculator;
