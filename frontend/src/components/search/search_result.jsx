import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = (props) => {
  const searchIngredients = props.ingredients.join(' | ');
  const list = props.ingredients.join(', ');
  return (
    <div>
      <p>{searchIngredients}</p>
      {props.searchQueued && <h2>Search Result with {list}</h2>}
    </div>
  );
};

SearchResult.defaultProps = {
  ingredients: [],
};

SearchResult.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResult;
