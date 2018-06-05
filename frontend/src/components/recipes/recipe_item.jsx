import React from 'react';
import { Link } from 'react-router-dom';
import './recipe_item.css';

const recipeItem = ({ recipe }) => {
  const imageLink = recipe.imageUrlsBySize[90].replace('90', '240');
  return(
    <li key={recipe.id} className="recipe-item">
      <Link className="recipe-item-link" to={recipe.id} target="_blank">{recipe.recipeName}</Link>
      <img className="recipe-item-image" src={imageLink} alt={recipe.recipeName} />
      <p className="recipe-item-missing">Missing ingredient count: {recipe.ingredients}</p>
      <p className="recipe-item-likes">Likes: {recipe.rating}</p>
    </li>
  );
};

export default recipeItem
