import React, { Component } from 'react';
import './App.css';

import { Navbar, MastHead} from './components/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          title="Some text">
          
        </Navbar>
        <MastHead />

      </div>
    );
  }
}

export default App;
