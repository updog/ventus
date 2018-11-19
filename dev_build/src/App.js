import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsernameForm from './components/UsernameForm'
import ChatScreen from './ChatScreen'
// import ReactModalLogin from 'react-modal-login';
// import placeholder from './placeholder.gif';
// import './App.css';
// import 'typeface-varela-round';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen'
        })
      })
      .catch(error => console.error('error', error))
  }

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
    // return (
    //   <Router>
    //     <div>
    //       <h1>Ventus</h1>
    //           <Link to="/splash"><button>splash</button></Link>
    //           <Link to="/chat"><button>demo</button></Link>
    //           <Route path="/splash" component={Splash} />
    //           <Route path="/chat" component={Chat} />
    //     </div>
    //   </Router>
    // );
  }
}

// class Splash extends Component {
//   render() {
//     return (
//       <div className="splash">
//         <h2>A simple and effective chat application designed for university students.</h2>
//         <div className="login">
//           <h2>Username:</h2>
//           <input/>
//           <h2>Password:</h2>
//           <input/>
//         </div>
//       </div>
//     );
//   }
// }
//
// class Chat extends Component {
//   render() {
//     return (
//       <div className="chat">
//         <h1>chat</h1>
//       </div>
//     );
//   }
// }

export default App;
