import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth_actions.js';
import { Link } from 'react-router-dom';

const mapSignup = (state) => {
  return {
    name: 'signup',
    error: 'add error'
  }
}

const mapDispatch = (dispatch) => {
  return {
    signup: (data) => dispatch(signup(data))
  }
}

const AuthForm = (props) => {
  const {name, error, signup} = props

  const handleSubmit = (e) => {
    e.preventDefault()
    const formName = e.target.name
    const email = e.target.email.value
    const password = e.target.password.value
    const first_name = e.target.firstName.value
    const last_name = e.target.lastName.value
    signup({email, password, first_name, last_name});
  }

  return (
    <div>
      <h1>Welcome to Block Chain Fridge</h1>
      <Link to="/login">Log In</Link>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="firstName"><small>First Name</small></label>
          <input name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName"><small>Last Name</small></label>
          <input name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

export default connect(mapSignup, mapDispatch)(AuthForm)
