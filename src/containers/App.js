import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'4jgujg', name: 'Max', age: 28 },
      {id:'f93kgk', name: 'Manu', age: 29 },
      {id:'p4i7b7', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (event, id) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // This ES6 sintax does avoid to mutate the state directly by creating
    // a new object from the state data element
    const person = {
      ...this.state.persons[personIndex]
    };
    // Another alternative
    //const person = Object.assign({}, this.state.persons[personIndex]):
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // Important: slice() create a new array from the original array.
    // it's recommended to use it to avoid bad behavior or unexpected errors
    //const persons = this.state.persons.slice();
    // ES6 sintax alternative
    // NOTE: you should always update state in an inmutable fashion,
    // without changing the current state
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  };

 tooglePersonHandler = ()=>{
   const doesShow = this.state.showPersons;
   this.setState({
     showPersons: !doesShow
   });
 }
  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.switchNameHandler} />;
    }
    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
        title={this.props.appTitle}
        persons={this.state.persons}
        clicked={this.tooglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
//NOTE: try to use bind instead of arrow function to attach a function event
