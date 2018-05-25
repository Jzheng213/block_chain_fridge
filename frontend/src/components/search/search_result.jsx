import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const ingredients = asArray(state.entities.ingredients);
  return {
    ingredients,
    searchQueued: state.entities.searchQueued,
  };
};

const SearchResult = ({ ingredients, searchQueued }) => {
  const searchIngredients = ingredients.join(' | ');
  const list = ingredients.join(', ');
  return (
    <div>
      <p>{searchIngredients}</p>
      {searchQueued && <h2>Search Result with {list}</h2>}
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
