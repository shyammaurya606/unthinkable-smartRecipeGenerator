import React, { useState } from 'react';

const FavoriteRecipes = ({ recipes, loading, onDeleteRecipe, onRefresh }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const handleDeleteRecipe = async (recipeId) => {
    setDeleting(recipeId);
    const success = await onDeleteRecipe(recipeId);
    if (success) {
      // Recipe deleted successfully
    }
    setDeleting(null);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="loading-spinner"></div>
        <span className="ml-3 text-gray-300">
          Loading your favorite recipes...
        </span>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🍳</div>
        <h3 className="text-xl font-medium text-white mb-2">
          No favorite recipes yet
        </h3>
        <p className="text-gray-400 mb-6">
          Generate some recipes and save your favorites to see them here.
        </p>
        <button
          onClick={onRefresh}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          My Favorite Recipes ({recipes.length})
        </h2>
        <button
          onClick={onRefresh}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Refresh
        </button>
      </div>

      {selectedRecipe ? (
        /* Recipe Detail View */
        <div className="space-y-6 animate-fade-in">
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8">
            {/* Responsive header */}
{/* Responsive header */}
<div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
  <div className="flex-1">
    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
      {selectedRecipe.recipe_data.title}
    </h1>
    <p className="text-gray-300 text-base sm:text-lg">
      {selectedRecipe.recipe_data.description}
    </p>
  </div>

  <button
    onClick={() => setSelectedRecipe(null)}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full sm:w-auto"
  >
    ← Back to Favorites
  </button>
</div>



            {/* Recipe Info - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-blue-900/30 border border-blue-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-300">
                  {selectedRecipe.recipe_data.prepTime}
                </div>
                <div className="text-sm text-blue-200">Prep Time</div>
              </div>
              <div className="text-center p-3 bg-yellow-900/30 border border-yellow-700 rounded-lg">
                <div className="text-2xl font-bold text-yellow-300">
                  {selectedRecipe.recipe_data.cookTime}
                </div>
                <div className="text-sm text-yellow-200">Cook Time</div>
              </div>
              <div className="text-center p-3 bg-gray-700 border border-gray-600 rounded-lg">
                <div className="text-2xl font-bold text-gray-300">
                  {selectedRecipe.recipe_data.servings}
                </div>
                <div className="text-sm text-gray-400">Servings</div>
              </div>
              <div className="text-center p-3 rounded-lg">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                    selectedRecipe.recipe_data.difficulty
                  )}`}
                >
                  {selectedRecipe.recipe_data.difficulty}
                </div>
                <div className="text-sm text-gray-400 mt-1">Difficulty</div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Ingredients */}
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
              <h2 className="text-xl font-bold text-white mb-4">📝 Ingredients</h2>
              <ul className="space-y-2">
                {selectedRecipe.recipe_data.ingredients?.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition */}
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                🥗 Nutrition (per serving)
              </h2>
              <div className="space-y-3">
                {selectedRecipe.recipe_data.nutrition &&
                  Object.entries(selectedRecipe.recipe_data.nutrition).map(
                    ([key, value]) => {
                      const bgColors = {
                        calories: 'bg-red-500/20 text-red-300',
                        protein: 'bg-green-500/20 text-green-300',
                        fat: 'bg-yellow-500/20 text-yellow-300',
                        carbs: 'bg-blue-500/20 text-blue-300',
                      };

                      const colorClass =
                        bgColors[key.toLowerCase()] || 'bg-gray-700 text-gray-200';

                      return (
                        <div
                          key={key}
                          className={`flex justify-between items-center px-4 py-2 rounded-lg ${colorClass}`}
                        >
                          <span className="capitalize">
                            {key === 'calories' ? 'Calories' : key}
                          </span>
                          <span className="font-semibold">{value}</span>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>

            {/* Tips */}
            {selectedRecipe.recipe_data.tips &&
              selectedRecipe.recipe_data.tips.length > 0 && (
                <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
                  <h2 className="text-xl font-bold text-white mb-4">💡 Tips</h2>
                  <ul className="space-y-2">
                    {selectedRecipe.recipe_data.tips.map((tip, index) => (
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
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">👨‍🍳 Instructions</h2>
            <ol className="space-y-4">
              {selectedRecipe.recipe_data.instructions?.map(
                (instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                      {index + 1}
                    </span>
                    <p className="text-gray-300 pt-1">{instruction}</p>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      ) : (
        /* Recipe List View */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-500 cursor-pointer"
            >
              <div onClick={() => setSelectedRecipe(recipe)}>
                <h3 className="text-xl font-bold text-white mb-2">
                  {recipe.recipe_data.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {recipe.recipe_data.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>⏱️ {recipe.recipe_data.totalTime}</span>
                    <span>👥 {recipe.recipe_data.servings}</span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                      recipe.recipe_data.difficulty
                    )}`}
                  >
                    {recipe.recipe_data.difficulty}
                  </span>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  Saved on {new Date(recipe.created_at).toLocaleDateString()}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  View Recipe →
                </button>
                <button
                  onClick={() => handleDeleteRecipe(recipe.id)}
                  disabled={deleting === recipe.id}
                  className="text-red-400 hover:text-red-300 text-sm transition-colors disabled:opacity-50"
                >
                  {deleting === recipe.id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteRecipes;
