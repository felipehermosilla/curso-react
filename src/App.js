import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[
      {name:'Max', age:30},
      {name:'Manu', age:33},
      {name:'Rex', age:32}
    ]
  }
  switchNameHandler = () =>{
   console.log('clicked!!');
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Click on me!</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>My Hobbie is: soccer</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now!'));
  }
}

export default App;
