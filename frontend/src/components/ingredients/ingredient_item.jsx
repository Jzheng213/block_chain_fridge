import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeIngredient } from '../../actions/ingredient_actions';
import './ingredient_item.css';

const mapDispatchToProps = dispatch => ({
  removeIngredient: idx => dispatch(removeIngredient(idx)),
});

const IngredientItem = ({ ingredient, index, removeIngredient }) => {
  return (
    <li className="ingredient-item">
      <span>{ ingredient } </span>
      <span className="ingredient-border">|</span>
      <button
        className="ingredient-remove"
        onClick={() => removeIngredient(index)}
      >X
      </button>
    </li>
  );
};

IngredientItem.propTypes = {
  ingredient: PropTypes.string,
  index: PropTypes.number,
  removeIngredient: PropTypes.func,
};

IngredientItem.defaultProps = {
  ingredient: '',
  index: -1,
};

export default connect(null, mapDispatchToProps)(IngredientItem);
