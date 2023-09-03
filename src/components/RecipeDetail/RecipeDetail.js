import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import './RecipeDetail.css';
import Footer from '../Footer/Footer';
import HeaderDetail from '../Header/HeaderDetail';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeInfo, setRecipeInfo] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`);
        const data = await response.json();
        setRecipeInfo(data);

        console.log('Recipe Info:', data);

        gsap.from('.recipe-detail img', { duration: 2, y: -100, opacity: 0 });
        gsap.from('.recipe-instructions', { duration: 2, y: 50, opacity: 0, scale: 0.8 }, '-=1.5');
    
      } catch (error) {
        console.error('Error fetching recipe information:', error);
      }
    };

    fetchRecipeInfo();
  }, [id, apiKey]);

  if (!recipeInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail">
      <HeaderDetail />
      <h2>{recipeInfo.title}</h2>
      <img src={recipeInfo.image} alt={recipeInfo.title} />
      <div className="recipe-instructions" dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }} />

      <Footer />
    </div>
  );
};

export default RecipeDetail;
