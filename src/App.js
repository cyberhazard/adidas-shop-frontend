import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import List from './List';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <Route exact path="/" component={List}/>
        <Route path="/Details" component={Details}/>
      </div>
    )
  }
}

export default App;
