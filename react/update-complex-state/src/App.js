import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    const getRandomNumber = (maxNumberExcluded) => Math.floor(Math.random() * maxNumberExcluded);

    setTimeout(() => {
      const { instructors } = this.state;
      const randomInstructorNumber = getRandomNumber(instructors.length);
      console.log('Random instructor: ' + instructors[randomInstructorNumber].name);
      const newInstructors = instructors.map((item, index) => {
        if (index === randomInstructorNumber) {
          const { hobbies } =  item; 
          const randomHobbieNumber = getRandomNumber(hobbies.length);
          console.log('Random hobbie: ' + hobbies[randomHobbieNumber]);
          return {...item, hobbies: hobbies.slice(0, randomHobbieNumber).concat(hobbies.slice(randomHobbieNumber + 1))};
        }
        return item;
      });
      this.setState({...this.state, instructors: newInstructors});
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
