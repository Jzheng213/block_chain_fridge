import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import SearchResult from './search_result';
import { recieveIngredients, toggleSearchQueued } from '../../actions/ingredient_actions';
import './search_form.css';

const mapStateToProps = state => {
  const ingredients = state.entities.ingredients.list || [];
  const searchQueued = state.entities.ingredients.searchQueued || false;
  return {
    ingredients,
    searchQueued,
  }
}

const mapDispatchToProps = dispatch => (
  {
    updateIngredients: ingredient => dispatch(recieveIngredients(ingredient)),
    toggleSearchQueued: (bool) => dispatch(toggleSearchQueued(bool)),
  }
);

class Search extends Component {

  state = {
    input: '',
    buttonLabel: 'What do you have?',
  };

    handleSearch = (e) => {
      e.preventDefault();
      this.props.toggleSearchQueued(true);
    }

    handleInput = (e) => {
      e.preventDefault();
      this.setState({ input: e.currentTarget.value })
    }

    handleAddIngredients = (e) => {
      e.preventDefault();
      const ingredients = this.props.ingredients.slice();
      ingredients.push(e.target.ingredient.value);
      this.props.updateIngredients(ingredients);
      this.setState({
        buttonLabel:'add more ingredients',
        input: '',
       });
    }

  render(){
    return(
      <div>
        <form onSubmit={this.handleAddIngredients}>
          <label htmlFor='ingredient'></label>
          <input className='searchBar'
            placeholder='add ingredients'
            name='ingredient'
            type='text'
            onChange={this.handleInput}
            value={this.state.input} />
          <button type='submit' className='searchButton'>{this.state.buttonLabel}</button>
          { this.props.ingredients.length !== 0 &&
            <button type='submit' onClick={this.handleSearch} className='searchButton'>search recipes</button>
          }
        </form>
      </div>
    )
  }
}

Search.defaultProps = {
  ingredients: [],
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
