import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Events-App</h1>
        <button className="ui icon button">
          <i className="smile icon" />
          CSS Button
        </button>

        <Button icon="smile" content="React Button" />
      </div>
    );
  }
}

export default App;