import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { logout, fetchCurrentUser } from '../../actions/auth_actions';
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
    logout: () => dispatch(logout()),
    getCurrentUser: () => dispatch(fetchCurrentUser())
  }
}

class LandingPage extends Component {

    componentDidMount(){
      this.props.getCurrentUser();
    }

    handleLogout = (e) => {
      e.preventDefault();
      this.props.logout();
    }
    render(){
      return(
        <div>
          {this.props.currentUser ?
            <div>
              <button onClick={this.handleLogout}>logout</button>
              <h1>You're logged in {this.props.users[this.props.currentUser].first_name}</h1>
            </div>
            :
            <div>
              <Link to='/login'>Login</Link>
              <h1>Please login </h1>
            </div>
          }
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
