import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './landing_page.css';
import Login from '../auth/login_form';
import NavBar from '../navbar/navbar';
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
          <NavBar />
          <h1>Block Chain Fridge</h1>
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
