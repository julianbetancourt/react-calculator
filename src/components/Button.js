var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <div className="button">
        <span>{this.props.type}</span>
      </div>
    );
  }
});

module.exports = Button;
