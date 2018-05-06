import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../util/auth_api_util.js';

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: 'add error'
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: 'add error'
  }
}

const mapDispatch = (dispatch) => {
  return {
    login: (email, password, formName) => dispatch(login(email, password, formName)),
    signup: (email, password, formName) => dispatch(signup(email, password, formName))
  }
}

const AuthForm = (props) => {
  const {name, displayName, error, signup} = props

  const handleSubmit = (e) => {
    e.preventDefault()
    const formName = e.target.name
    const email = e.target.email.value
    const password = e.target.password.value
    signup(email, password, formName);
  }

  return (
    <div>
      <h1>Welcome to Block Chain Fridge</h1>
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
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
