import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './landing_page.css';
import Login from '../auth/login_form';
import NavBar from '../navbar/navbar';
import SearchForm from '../search/search_form';
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
    getCurrentUser: () => dispatch(fetchCurrentUser())
  }
}


class LandingPage extends Component {
    state = {
      ingredients: [],
      searchQueued: false,
      input: '',
      buttonLabel: 'What do you have?',
    };

    componentDidMount(){
      this.props.getCurrentUser();
    }

    render(){
      const list = this.state.ingredients.join(', ');
      return(
        <div>
          <NavBar />
          <h1>Block Chain Fridge</h1>
          <SearchForm />
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
