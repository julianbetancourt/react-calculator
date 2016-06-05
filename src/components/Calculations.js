var React = require('react');
var CurrentResult = require('./CurrentResult');
var CurrentOperation = require('./CurrentOperation');

var Calculations = React.createClass({
  render: function () {
    return (
      <div className="calc-container">
        <div className="calculations">
          <CurrentOperation />
          <CurrentResult />
        </div>
      </div>
    );
  }
});

module.exports = Calculations;
