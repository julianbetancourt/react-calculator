var React = require('react');
var Row = require('./Row');

var Buttons = React.createClass({
  render: function () {
    return (
      <div className="buttons">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
})

module.exports = Buttons;
