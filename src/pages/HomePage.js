import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import RecipeList from '../components/RecipeList/RecipeList';
import { Helmet } from 'react-helmet'; // Importa Helmet
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian&number=12&addRecipeInformation=true&query=`;

  const searchRecipes = async (query) => {
    try {
      const response = await fetch(API_URL + query);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Ricette Vegetariane</title>
        {/* Altre impostazioni di Helmet se necessario */}
      </Helmet>
      <Header />
      <h1>Ricette Vegetariane</h1>
      <SearchBar onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
      <Footer /> 
    </div>
  );
};

export default HomePage;
