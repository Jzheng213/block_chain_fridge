import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth_actions.js';

const mapLogin = (state) => {
  return {
    name: 'login',
    error: 'add error'
  }
}

const mapDispatch = (dispatch) => {
  return {
    login: (data) => dispatch(login(data))
  }
}

const AuthForm = (props) => {
  const {name,  error, login} = props

  const handleSubmit = (e) => {
    e.preventDefault()
    const formName = e.target.name
    const email = e.target.email.value
    const password = e.target.password.value
    login({ email, password });
  }

  return (
    <div>
      <h1>Welcome to Block Chain Fridge</h1>
      <Link to="/signup">Sign Up</Link>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

export default connect(mapLogin, mapDispatch)(AuthForm)
