import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default App;
