import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { asArray } from '../../reducers/users/selectors';
import './landing_page.css';
import { Signup } from '../auth/auth-form';

const mapStateToProps = state => {
  const users = asArray(state.entities.users);
  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => dispatch(fetchUsers())
  }
}

const LandingPage = () => {
  return(
    <Signup></Signup>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
