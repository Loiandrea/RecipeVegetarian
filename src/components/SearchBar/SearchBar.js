import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const foundRecipes = await onSearch(query);
      setRecipes(foundRecipes || []);
    } catch (error) {
      console.error('Errore durante la ricerca delle ricette:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); 
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cerca ricette..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} disabled={isLoading}>
        Cerca
      </button>

      {isLoading && <div className="loader">Cerca... Loading...</div>}

      {error && <div className="error">{error}</div>}

      {!isLoading && recipes && recipes.length > 0 && (
        <div className="recipes">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe">
              <h3>{recipe.title}</h3>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
