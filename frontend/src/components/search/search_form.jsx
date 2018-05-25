import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import SearchResult from './search_result';
import { recieveIngredient, toggleSearchQueued } from '../../actions/ingredient_actions';
import './search_form.css';

const mapStateToProps = state => {
  return {
    ingredients: state.entities.ingredients,
    searchQueued: state.entities.searchQueued,
  }
}

const mapDispatchToProps = dispatch => (
  {
    updateIngredients: ingredient => dispatch(recieveIngredients(ingredient)),
  }
);

class Search extends Component {

  state = {
    input: '',
    buttonLabel: 'What do you have?',
  };

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
          { isEmpty(this.props.ingredients) &&
            <button type='submit' onClick={this.handleSearch} className='searchButton'>search recipes</button>
          }
        </form>
      </div>
    )
  }
}

Search.defaultProps = {
  ingredients
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
