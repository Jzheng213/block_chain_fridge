import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth_actions';
import NavWelcome from '../util/nav_welcome';
import './navbar.css';

const mapStateToProps = state => (
  {
    users: state.entities.users,
    currentUser: state.session.currentUser.id,
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch(logout()),
  }
);

const NavBar = (props) => {
  const { currentUser, users, logout } = props;

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className='navbar'>
      <NavWelcome currentUser={currentUser} users={users} />
      {currentUser ?
        <React.Fragment>
          <button onClick={handleLogout} className='session'>logout</button>
        </React.Fragment> :
        <React.Fragment>
          <Link to='/signup' className='session'>Signup</Link>
          <Link to='/login' className='session'>Login</Link>
        </React.Fragment>}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
