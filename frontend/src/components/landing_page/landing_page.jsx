import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/auth_actions';
import { asArray } from '../../reducers/users/selectors';
import './landing_page.css';
import Login from '../auth/login_form';


const mapStateToProps = state => {
  return {
    users: state.entities.users,
    currentUser: state.session.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout())
  }
}

const LandingPage = ({users, currentUser, logout}) => {
    const handleLogout = (e) => {
      e.preventDefault();
      debugger;
      logout();
    }
    return(
      <div>
        <button onClick={handleLogout}>logout</button>
        <h1>You're logged in {users[currentUser].first_name}</h1>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
