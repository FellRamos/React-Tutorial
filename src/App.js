import React, { Component } from 'react';
import Todos from './components/Todos';
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'todo1',
        completed: false
      },
      {
        id: 2,
        title: "todo2",
        completed: true
      },
      {
        id: 3,
        title: "todo3",
        completed: false
      }
    ]
  } 
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
