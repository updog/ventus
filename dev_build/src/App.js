import React, { Component } from 'react';
import ReactModalLogin from 'react-modal-login';
import placeholder from './placeholder.gif';
import './App.css';
import 'typeface-varela-round';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      loading: false,
      error: null
    };
  };

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  onLoginSuccess(method, response) {
    console.log('logged successfully with ' + method);
  }

  onLoginFail(method, response) {
    console.log('logging failed with ' + method);
    this.setState({
      error: response
    })
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  afterTabsChange() {
    this.setState({
      error: null
    });
  }

  render() {
    return (
      <div>
        <div className="splash">
          <h1>Ventus</h1>
          <h2>A simple and effective chat application designed for university students.</h2>
          <div className="login">

            <button className="login-button" onClick={() => this.openModal()}>Log in</button>

            <ReactModalLogin
              visible={this.state.showModal}
              onCloseModal={this.closeModal.bind(this)}
              loading={this.state.loading}
              error={this.state.error}
              tabs={{
                afterChange: this.afterTabsChange.bind(this)
              }}
              loginError={{
                label: "Couldn't sign in, please try again."
              }}
              registerError={{
                label: "Couldn't sign up, please try again."
              }}
              startLoading={this.startLoading.bind(this)}
              finishLoading={this.finishLoading.bind(this)}
              form={{
                onLogin: null,
                onRegister: null,
                onRecoverPassword: null,
                loginInputs: [{
                  containerClass: "log",
                  type: "Email",
                  inputClass: "inp",
                  id: "id",
                  name: "name",
                  placeholder: "Email",
                  label: "Email"
                }, {
                  containerClass: "log",
                  type: "Password",
                  inputClass: "inp",
                  id: "id",
                  name: "name",
                  placeholder: "Password",
                  label: "Password"
                }],
                registerInputs: [{
                  containerClass: "log",
                  type: "Name",
                  inputClass: "inp",
                  id: "id",
                  name: "name",
                  placeholder: "Name",
                  label: "Name"
                }, {
                  containerClass: "log",
                  type: "Email",
                  inputClass: "inp",
                  id: "id",
                  name: "name",
                  placeholder: "Email",
                  label: "Email"
                }, {
                  containerClass: "log",
                  type: "Password",
                  inputClass: "inp",
                  id: "id",
                  name: "name",
                  placeholder: "Password",
                  label: "Password"
                }],
              }}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
