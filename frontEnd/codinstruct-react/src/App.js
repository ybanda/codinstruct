import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import {CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      siteName: 'Hello',
      data :[]
    }
    
  }
  componentDidMount(){
    console.log('Inside of Component Did Mount');
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(resp => resp.json())
     .then(users => this.setState({data : users , siteName : 'Hello Data Load Complete'}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.setState({ siteName: 'Hello After Login' })}> Login</button>
            Codinstruct {this.state.siteName}
        </header>
        <CardList monsters={this.state.data}>
        </CardList>
      </div>
    );
  }

}
export default App;

