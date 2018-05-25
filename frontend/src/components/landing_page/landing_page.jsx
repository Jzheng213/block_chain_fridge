import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './landing_page.css';
import Login from '../auth/login_form';
import NavBar from '../navbar/navbar';
import SearchForm from '../search/search_form';
import SearchResult from '../search/search_result';
import { fetchCurrentUser } from '../../actions/auth_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    users: state.entities.users,
    currentUser: state.session.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(fetchCurrentUser()),
  }
}


class LandingPage extends Component {
    state = {
      input: '',
      buttonLabel: 'What do you have?',
    };

    componentDidMount(){
      this.props.getCurrentUser();
    }

    render(){
      return(
        <div>
          <NavBar />
          <h1>PANTRY</h1>
          <SearchForm />
          <SearchResult />
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
