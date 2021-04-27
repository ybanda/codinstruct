import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import {CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      siteName: 'Hello',
      data :[],
      searchField:''
    }
    
  }
  componentDidMount(){
    console.log('Inside of Component Did Mount');
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(resp => resp.json())
     .then(users => this.setState({data : users , siteName : 'Hello Data Load Complete'}));
  }
  render() {
    const { searchField, data } = this.state;
    const filteredMonsters = data.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
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
        <SearchBox placeholder="Search Users" type="search" handleChange={e=>{
         this.setState({searchField: e.target.value},()=>{
          console.log('Calling after setState async call :: '+e);
         });
        }}></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }

}
export default App;

