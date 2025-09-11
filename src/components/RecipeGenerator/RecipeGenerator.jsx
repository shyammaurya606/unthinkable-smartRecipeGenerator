import React, { useState } from 'react';
import IngredientInput from './IngredientInput';
import DietaryPreferences from './DietaryPreferences';
import RecipeDisplay from './RecipeDisplay';
import { generateRecipe } from '../../utils/geminiApi';

const RecipeGenerator = ({ user, onSaveRecipe, favoriteRecipes }) => {
  const [ingredients, setIngredients] = useState([]);
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateRecipe = async () => {
    if (ingredients.length === 0) {
      setError('Please add at least one ingredient');
      return;
    }

    setLoading(true);
    setError('');
    setCurrentRecipe(null);

    try {
      const recipe = await generateRecipe(ingredients, dietaryPreferences);
      setCurrentRecipe(recipe);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewRecipe = () => {
    setCurrentRecipe(null);
    setError('');
  };

  const isRecipeSaved = (recipe) => {
    return favoriteRecipes.some(fav => fav.recipe_data.title === recipe.title);
  };

  return (
    <div className="space-y-8">
      {!currentRecipe ? (
        <>
          {/* Recipe Generation Form */}
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Create Your Perfect Recipe
            </h2>
            
            <div className="space-y-6">
              <IngredientInput
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
              
              <DietaryPreferences
                preferences={dietaryPreferences}
                setPreferences={setDietaryPreferences}
              />

              {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                onClick={handleGenerateRecipe}
                disabled={loading || ingredients.length === 0}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-100 shadow-lg text-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-spinner mr-3"></div>
                    Generating your recipe...
                  </div>
                ) : (
                  ' Generate Recipe'
                )}
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">
              How it works:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-200">
              <li>Add the ingredients you have available</li>
              <li>Select any dietary preferences (optional)</li>
              <li>Click "Generate Recipe" to get AI-powered suggestions</li>
              <li>Save your favorite recipes for later</li>
            </ol>
          </div>
        </>
      ) : (
        <RecipeDisplay
          recipe={currentRecipe}
          onNewRecipe={handleNewRecipe}
          onSaveRecipe={onSaveRecipe}
          isSaved={isRecipeSaved(currentRecipe)}
        />
      )}
    </div>
  );
};

export default RecipeGenerator;