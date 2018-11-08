import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
  state  = {
    username: '',
  }

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('@GoTwitter:username', username);

    this.props.history.push('/timeline');
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Logo do Twitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome do Usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}