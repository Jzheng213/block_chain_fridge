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
    state = {
      ingredients: [],
      searchQueued: false,
      input: '',
      buttonLabel: 'What do you have?',
    };

    componentDidMount(){
      this.props.getCurrentUser();
    }

    handleLogout = (e) => {
      e.preventDefault();
      this.props.logout();
    }

    handleSearch = (e) => {
      e.preventDefault();
      this.setState({searchQueued: true});
    }

    handleInput = (e) => {
      e.preventDefault();
      this.setState({ input: e.currentTarget.value })
    }

    handleAddIngredients = (e) => {
      e.preventDefault();
      const ingredients = this.state.ingredients.slice();
      ingredients.push(e.target.ingredient.value);
      this.setState({ ingredients,
        buttonLabel:'add more ingredients',
        input: '',
       });
    }

    render(){
      const list = this.state.ingredients.join(', ');

      return(
        <div>
          <h1>Block Chain Fridge</h1>
          {this.props.currentUser ?
            <React.Fragment>
              <button onClick={this.handleLogout}>logout</button>
              <h4>Welcome {this.props.users[this.props.currentUser].first_name}</h4>
            </React.Fragment> :
            <React.Fragment>
              <Link to='/login'>Login</Link>
              <h4>Hello Guest</h4>
            </React.Fragment>
          }
          <form onSubmit={this.handleAddIngredients}>
            <label htmlFor='ingredient'></label>
            <input name='ingredient' type='text' onChange={this.handleInput} value={this.state.input}></input>
            <button type='submit'>{this.state.buttonLabel}</button>
            {this.state.ingredients.length !== 0 &&
              <button type='submit' onClick={this.handleSearch}>search recipes</button>
            }
          </form>
          {this.state.searchQueued && <h2>Search Result with {list}</h2>}
          <ul>
            {
              this.state.ingredients.map((ingredient, idx) => {
                return <li key={idx}>{ingredient}</li>
              })
            }
          </ul>
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
