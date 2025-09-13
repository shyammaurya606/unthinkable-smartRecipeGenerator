// src/components/Landing/SampleRecipes.jsx
import React, { useState } from "react";
import sampleRecipes from "../../data/recipes"; // your 10 recipes

const SampleRecipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "bg-green-900/50 text-green-300 border-green-700";
      case "medium":
        return "bg-yellow-900/50 text-yellow-300 border-yellow-700";
      case "hard":
        return "bg-red-900/50 text-red-300 border-red-700";
      default:
        return "bg-gray-700 text-gray-300 border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Sample Indian Recipes
      </h1>

      {selectedRecipe ? (
        // Recipe Detail View
        <div className="space-y-6 animate-fade-in">
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedRecipe.title}
                </h1>
                <p className="text-gray-300 text-base sm:text-lg">
                  {selectedRecipe.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full sm:w-auto"
              >
                ← Back to Recipes
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-blue-900/30 border border-blue-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-300">
                  {selectedRecipe.prepTime}
                </div>
                <div className="text-sm text-blue-200">Prep Time</div>
              </div>
              <div className="text-center p-3 bg-yellow-900/30 border border-yellow-700 rounded-lg">
                <div className="text-2xl font-bold text-yellow-300">
                  {selectedRecipe.cookTime}
                </div>
                <div className="text-sm text-yellow-200">Cook Time</div>
              </div>
              <div className="text-center p-3 bg-gray-700 border border-gray-600 rounded-lg">
                <div className="text-2xl font-bold text-gray-300">
                  {selectedRecipe.servings}
                </div>
                <div className="text-sm text-gray-400">Servings</div>
              </div>
              <div className="text-center p-3 rounded-lg">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                    selectedRecipe.difficulty
                  )}`}
                >
                  {selectedRecipe.difficulty}
                </div>
                <div className="text-sm text-gray-400 mt-1">Difficulty</div>
              </div>
            </div>
          </div>

          {/* Ingredients, Nutrition & Tips */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
              <h2 className="text-xl font-bold text-white mb-4">📝 Ingredients</h2>
              <ul className="space-y-2">
                {selectedRecipe.ingredients?.map((ing, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
              <h2 className="text-xl font-bold text-white mb-4">🥗 Nutrition</h2>
              {selectedRecipe.nutrition &&
                Object.entries(selectedRecipe.nutrition).map(([key, value]) => {
                  const bgColors = {
                    calories: "bg-red-500/20 text-red-300",
                    protein: "bg-green-500/20 text-green-300",
                    fat: "bg-yellow-500/20 text-yellow-300",
                    carbs: "bg-blue-500/20 text-blue-300",
                  };
                  const colorClass = bgColors[key.toLowerCase()] || "bg-gray-700 text-gray-200";
                  return (
                    <div
                      key={key}
                      className={`flex justify-between items-center px-4 py-2 rounded-lg ${colorClass}`}
                    >
                      <span className="capitalize">{key}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  );
                })}
            </div>

            {selectedRecipe.tips && selectedRecipe.tips.length > 0 && (
              <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
                <h2 className="text-xl font-bold text-white mb-4">💡 Tips</h2>
                <ul className="space-y-2">
                  {selectedRecipe.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 mt-6">
            <h2 className="text-xl font-bold text-white mb-4">👨‍🍳 Instructions</h2>
            <ol className="space-y-4">
              {selectedRecipe.instructions?.map((ins, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                    {idx + 1}
                  </span>
                  <p className="text-gray-300 pt-1">{ins}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        // Recipe List View
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-500 cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <h3 className="text-xl font-bold text-white mb-2">{recipe.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{recipe.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">⏱️ {recipe.totalTime}</span>
                <span className="text-sm text-gray-400">👥 {recipe.servings}</span>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                  recipe.difficulty
                )}`}
              >
                {recipe.difficulty}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SampleRecipes;
