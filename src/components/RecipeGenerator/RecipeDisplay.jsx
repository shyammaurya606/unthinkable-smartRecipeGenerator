import React, { useState } from 'react';

const RecipeDisplay = ({ recipe, onNewRecipe, onSaveRecipe, isSaved }) => {
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSaveRecipe = async () => {
    if (isSaved) return;

    setSaving(true);
    const success = await onSaveRecipe(recipe);

    if (success) {
      setSaveMessage('Recipe saved to favorites!');
      setTimeout(() => setSaveMessage(''), 3000);
    } else {
      setSaveMessage('Failed to save recipe. Please try again.');
      setTimeout(() => setSaveMessage(''), 3000);
    }
    setSaving(false);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'bg-green-900/50 text-green-300 border-green-700';
      case 'medium':
        return 'bg-yellow-900/50 text-yellow-300 border-yellow-700';
      case 'hard':
        return 'bg-red-900/50 text-red-300 border-red-700';
      default:
        return 'bg-gray-700 text-gray-300 border-gray-600';
    }
  };

  const getNutritionColor = (key) => {
    switch (key.toLowerCase()) {
      case 'fat':
        return 'bg-yellow-900/50 text-yellow-300 border-yellow-700';
      case 'carbs':
        return 'bg-blue-900/50 text-blue-300 border-blue-700';
      case 'fiber':
        return 'bg-gray-700 text-gray-300 border-gray-600';
      case 'protein':
        return 'bg-green-900/50 text-green-300 border-green-700';
      case 'calories':
        return 'bg-red-900/50 text-red-300 border-red-700';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-600';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-8">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          {/* Title & Description */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">{recipe.title}</h1>
            <p className="text-gray-300 text-lg">{recipe.description}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <button
              onClick={handleSaveRecipe}
              disabled={saving || isSaved}
              className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto ${
                isSaved
                  ? 'bg-green-600 hover:bg-green-600 text-white'
                  : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
              }`}
            >
              {saving ? (
                <div className="flex items-center justify-center">
                  <div
                    className="loading-spinner mr-2"
                    style={{ width: '16px', height: '16px' }}
                  ></div>
                  Saving...
                </div>
              ) : isSaved ? (
                '✓ Saved'
              ) : (
                '💾 Save Recipe'
              )}
            </button>

            <button
              onClick={onNewRecipe}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              🍳 New Recipe
            </button>
          </div>
        </div>

        {saveMessage && (
          <div
            className={`mb-4 p-3 rounded-lg border ${
              saveMessage.includes('Failed')
                ? 'bg-red-900/50 border-red-700 text-red-300'
                : 'bg-green-900/50 border-green-700 text-green-300'
            }`}
          >
            {saveMessage}
          </div>
        )}

        {/* Recipe Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
            <div className="text-2xl font-bold text-blue-300">{recipe.prepTime}</div>
            <div className="text-sm text-blue-200">Prep Time</div>
          </div>
          <div className="text-center p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
            <div className="text-2xl font-bold text-yellow-300">{recipe.cookTime}</div>
            <div className="text-sm text-yellow-200">Cook Time</div>
          </div>
          <div className="text-center p-4 bg-gray-700 border border-gray-600 rounded-lg">
            <div className="text-2xl font-bold text-gray-300">{recipe.servings}</div>
            <div className="text-sm text-gray-400">Servings</div>
          </div>
          <div className="text-center p-4 rounded-lg">
            <div
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                recipe.difficulty
              )}`}
            >
              {recipe.difficulty}
            </div>
            <div className="text-sm text-gray-400 mt-1">Difficulty</div>
          </div>
        </div>
      </div>

      {/* Ingredients, Nutrition, Tips */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Ingredients */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-4">📝 Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nutrition */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-4">🥗 Nutrition (per serving)</h2>
          <div className="space-y-3">
            {recipe.nutrition &&
              Object.entries(recipe.nutrition).map(([key, value]) => (
                <div
                  key={key}
                  className={`flex justify-between items-center p-3 rounded-lg border ${getNutritionColor(
                    key
                  )}`}
                >
                  <span className="capitalize font-medium">
                    {key === 'calories' ? 'Calories' : key}
                  </span>
                  <span className="font-bold">{value}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Tips */}
        {recipe.tips && recipe.tips.length > 0 && (
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
            <h2 className="text-xl font-bold text-white mb-4">💡 Tips</h2>
            <ul className="space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span className="text-gray-300 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-8">
        <h2 className="text-xl font-bold text-white mb-4">👨‍🍳 Instructions</h2>
        <ol className="space-y-4">
          {recipe.instructions?.map((instruction, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                {index + 1}
              </span>
              <p className="text-gray-300 pt-1">{instruction}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDisplay;
