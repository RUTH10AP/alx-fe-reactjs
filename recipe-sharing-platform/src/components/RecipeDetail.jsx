import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-4">{recipe.summary}</p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc ml-6">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
