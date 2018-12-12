import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListBooks from "./components/ListBook";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { idBook: 0 }
  }

  render() {
    return (
      <div className="container">
        <Route component={Menu}/>
        <Route exact path="/" component={ListBooks} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;