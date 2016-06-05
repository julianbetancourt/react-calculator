var React = require('react');
var Button = require('./Button');
var Row = React.createClass({
  render: function () {
    return (
      <div className="row">
        <Button number="5" />
        <Button number="5" />
        <Button number="5" />
        <Button number="5" />
      </div>
    );
  }
});

module.exports = Row;
