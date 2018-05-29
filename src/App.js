import React, { Component } from 'react';
import Calendar from './containers/Calendar';
import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state={
    }
    
  }
  render() {

    return (
      <div className="App">
        <div className="title">Calendar</div>
        <Calendar />
      </div>
    );
  }
}

export default App;
