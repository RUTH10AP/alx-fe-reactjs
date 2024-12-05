import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-xl font-semibold">{recipe.title}</h3>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>
      <Link to={`/recipe/${recipe.id}`}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
