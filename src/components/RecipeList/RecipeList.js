import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css';

const apiKey = process.env.REACT_APP_API_KEY;

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <Link to={`/recipe/${recipe.id}`}>Visualizza Dettagli</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
