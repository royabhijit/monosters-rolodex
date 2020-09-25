import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './components/card-list/card-list.styles.css';

import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = { 
      monsters: [],
      searchField: '',
     }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() { 
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1 className="heading">Monsters Rolodex</h1>
        <SearchBox 
        placeholder="Search monster" 
        handleChange={this.handleChange} 
        />
        <CardList monsters={ filterMonster } />
      </div>
    );
  }
}

export default App;