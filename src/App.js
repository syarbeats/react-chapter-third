import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import MainContent from './component/MainContent';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
    );
  }
}

export default App;
