// Index Route
const React = require('react');

class Index extends React.Component {
  render() {
   
    return (
      <div>
        <h1>Captain's Log</h1>
        <ul>
          {this.props.logs.map((log) => (
            <li key={log._id}>
              {log.title} - {log.shipIsBroken ? 'Ship is Broken' : 'Ship is Not Broken'}
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
              </form>
            </li>
          ))}
        </ul>
        <a href="/logs/new">New Log Entry</a>
      </div>
    );
  }
}

module.exports = Index;