import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup } from '../../actions/auth_actions';

const mapSignup = (state) => {
  return {
    name: 'signup',
    errorMessage: state.errors.users.message,
  };
};

const mapDispatch = (dispatch) => {
  return {
    signup: (data) => dispatch(signup(data))
  };
};

const AuthForm = (props) => {
  const { name, errorMessage, signup } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    signup({
      email, password, firstName, lastName,
    });
  };

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
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

AuthForm.protoTypes = {
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  signup: PropTypes.func,
};

export default connect(mapSignup, mapDispatch)(AuthForm);