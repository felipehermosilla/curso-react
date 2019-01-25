import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <Person name="Max" age="30"></Person>
        <Person name="Manu" age="33"></Person>
        <Person name="Rex" age="32">My Hobbie is: soccer</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now!'));
  }
}

export default App;
