import React from 'react';
import { Link } from 'react-router-dom';
import './recipe_item.css';

const recipeItem = ({ recipe }) => {
  const imageLink = recipe.imageUrlsBySize[90].replace('90', '500');
  debugger;
  return(
    <li key={recipe.id} className="recipe-item">
      <img className="recipe-item-image" src={imageLink} alt={recipe.recipeName} />
      <article className="recipe-description">
        <Link className="recipe-item-link" to={recipe.id} target="_blank">{recipe.recipeName}</Link>
        <div className="star-ratings-css">
          <div className="star-ratings-css-top" style={{ width: `${String(recipe.rating * 20.0) }%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div>
        <div className="prep-time">
          <i className="fas fa-clock" />
          <span>{ ` ${String(recipe.totalTimeInSeconds / 60.0)} mins`}</span>
        </div>
      </article>
    </li>
  );
};

export default recipeItem
