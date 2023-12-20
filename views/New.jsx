const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log Entry</h1>
        <form action="/logs" method="POST">
          <label>Title: </label>
          <input type="text" name="title" /><br />
          <label>Entry: </label>
          <textarea name="entry"></textarea><br />
          <label>Ship is Broken: </label>
          <input type="checkbox" name="shipIsBroken" /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

module.exports = New;