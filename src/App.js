import React, { Component } from "react";
import "./App.css";
import {CardList } from './Components/Card-list/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component';

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json(response)
    .then(users => this.setState({ monsters: users})));
  }

  render() {
    const {monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1>monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters' 
          handlechange={e =>this.setState({searchField: e.target.value } )}
          />
     
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
