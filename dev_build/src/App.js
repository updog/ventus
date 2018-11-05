import React, { Component } from 'react';
import placeholder from './placeholder.gif';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={placeholder} className="App-logo" alt="logo" />
          <p>
            Welcome to Ventus! Currently under construction.
          </p>
          <a
            className="App-link"
            href="https://github.com/updog/ventus"
            target="_blank"
            rel="noopener noreferrer"
          >
            See our Github!
          </a>
          <div className="arrow"></div>
        </header>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        <div className="splash">
          <h1>Ventus</h1>
          <h2>A simple and effective chat application designed for university students.</h2>
          <div className="login">
            <p>E-mail:</p>
            <input/>
            <p>Password:</p>
            <input/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
