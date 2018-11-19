import React, { Component } from 'react';
import Nav from './Nav';
import Header from "./Header";
import Search from "./Search";
import BusinessInfo from "./BusinessInfo";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Search/>
        <BusinessInfo/>
      </div>
    );
  }
}

export default App;
