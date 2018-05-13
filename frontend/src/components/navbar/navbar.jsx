import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth_actions';
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
      {currentUser ?
        <React.Fragment>
          <h4>Welcome {users[currentUser].first_name}</h4>
          <button onClick={handleLogout}>logout</button>
        </React.Fragment> :
        <React.Fragment>
          <Link to='/login'>Login</Link>
          <h4>Hello Guest</h4>
        </React.Fragment>}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
