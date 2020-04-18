import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'}};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event)=> this.switchNameHandler(event, person.id)}
            />
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.tooglePersonHandler}>
          Toogle Person
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
//NOTE: try to use bind instead of arrow function to attach a function event
