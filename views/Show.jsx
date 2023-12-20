const React = require('react');

class Show extends React.Component {
  render() {

    return (
      <div>
        <h1> Show page</h1>
        <h2>Title:{logs.title}</h2>
        <h3>Entry:{logs.entry}</h3>
        <h3>
          ShipIsBroken:
          {logs.shipIsBroken
            ? "The ship is broken."
            : " The ship is not broken."}
        </h3>
        <a href="/">back</a>
        <br />
      </div>
    );
  }
}



  module.exports = Show; 