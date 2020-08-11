import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header'
import Descripe from './component/Descripe';
import Contexts from './component/Contexts';

class App extends Component {
  render() {
    return <main className="app">
      <Header />
      <Descripe />
      <Contexts />
    </main>;
  }
}

export default App;
