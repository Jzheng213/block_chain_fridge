import React, { Component } from 'react';
import SearchResult from './search_result';

class Search extends Component {

  state = {
    ingredients: [],
    searchQueued: false,
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
      const ingredients = this.state.ingredients.slice();
      ingredients.push(e.target.ingredient.value);
      this.setState({ ingredients,
        buttonLabel:'add more ingredients',
        input: '',
       });
    }

  render(){
    return(
      <div>
        <form onSubmit={this.handleAddIngredients}>
          <label htmlFor='ingredient'></label>
          <input name='ingredient' type='text' onChange={this.handleInput} value={this.state.input}></input>
          <button type='submit'>{this.state.buttonLabel}</button>
          {this.state.ingredients.length !== 0 &&
            <button type='submit' onClick={this.handleSearch}>search recipes</button>
          }
        </form>
        <SearchResult
          ingredients={this.state.ingredients}
          searchQueued={this.state.searchQueued}
          />
      </div>
    )
  }
}

export default Search;
