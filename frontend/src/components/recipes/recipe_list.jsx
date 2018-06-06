import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asArray } from '../../reducers/selectors';
import './recipe_list.css';

import RecipeItem from './recipe_item';

const mapStateToProps = (state) => {
  return {
    recipes: state.entities.recipes.matches,
  }
};

const RecipeList = ({ recipes }) => {
  return (
    <ul className="recipe-list">
      {
        recipes.map((recipe) => {
          return <RecipeItem recipe={recipe} />
        })
      }
    </ul>
  );
};

RecipeList.defaultProps = {
  recipes: [],
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    imageType: PropTypes.string,
    likes: PropTypes.number,
    missedIngredientCount: PropTypes.number,
    title: PropTypes.string,
    usedIngredientCount: PropTypes.number,
  })),
};

export default connect(mapStateToProps, null)(RecipeList);
