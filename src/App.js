import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Matt', age: 33},
      { name: 'Amanda', age: 34},
      { name: 'Scout', age: 7}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 33},
        { name: 'Amanda', age: 34},
        { name: 'Scout', age: 8}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Matt', age: 33},
        { name: event.target.value, age: 34},
        { name: 'Scout', age: 7}
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Matthew')}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Matt!')}
          changed={this.nameChangedHandler}>
            My Hobbies: Napping
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
