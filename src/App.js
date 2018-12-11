import React, { Component } from 'react';
import './App.css';
import ListBooks from "./components/ListBook";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { idBook: 0 }
  }

  render() {

    return (
      <div className={"container"}>
        <ListBooks idSelected={id => this.setState( {idBook: id} )}/>
      </div>
    );
  }
}

export default App;