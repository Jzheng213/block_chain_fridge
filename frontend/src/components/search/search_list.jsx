import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IngredientItem from '../ingredients/ingredient_item';
import './search_list.css';

const mapStateToProps = (state) => {
  const ingredients = state.entities.ingredients.list;
  return {
    ingredients,
    searchQueued: state.entities.ingredients.searchQueued,
    recipes: state.entities.recipes,
  };
};

const SearchResult = ({ ingredients, searchQueued }) => {
  const searchIngredients = ingredients.join(' | ');
  const list = searchQueued ? ingredients.join(', ') : '';
  return (
    <div>
      <ul className="ingredients">
        {ingredients.map((ingredient, idx) => (
          <IngredientItem ingredient={ingredient} index={idx} />
          ))
        }
      </ul>
    </div>
  );
};

SearchResult.defaultProps = {
  ingredients: [],
  searchQueued: false,
};

SearchResult.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  searchQueued: PropTypes.bool,
};

export default connect(mapStateToProps, null)(SearchResult);
