import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons:[
      {name:'Max', age:30},
      {name:'Manu', age:33},
      {name:'Rex', age:32}
    ],
    otherProperty: 'This is another property'
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);
  const switchNameHandler = () => {
   //console.log('clicked!!');
   //this.persons[0].name = 'Maximilian'; DO NOT DO This
   setPersonsState({
     persons:[
       {name:'Maximilian', age:30},
       {name:'Manu', age:33},
       {name:'Rex', age:28}
     ],
     otherProperty: 'This is another property'
   });

 };
  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Click on me!</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbie is: soccer</Person>
    </div>
  );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now!'));

};

export default app;
