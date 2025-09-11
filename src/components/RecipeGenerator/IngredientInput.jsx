import React, { useState } from 'react';

const COMMON_INGREDIENTS = [
  'Chicken breast', 'Ground beef', 'Salmon', 'Eggs', 'Rice', 'Pasta',
  'Onion', 'Garlic', 'Tomatoes', 'Bell peppers', 'Carrots', 'Potatoes',
  'Broccoli', 'Spinach', 'Mushrooms', 'Cheese', 'Milk', 'Butter',
  'Olive oil', 'Salt', 'Black pepper', 'Basil', 'Oregano', 'Thyme',
  'Lemon', 'Ginger', 'Soy sauce', 'Honey', 'Flour', 'Sugar'
];

const IngredientInput = ({ ingredients, setIngredients }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = COMMON_INGREDIENTS.filter(ingredient =>
        ingredient.toLowerCase().includes(value.toLowerCase()) &&
        !ingredients.includes(ingredient)
      );
      setSuggestions(filtered.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const addIngredient = (ingredient) => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setInputValue('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const removeIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient(inputValue.trim());
    }
  };

  const handleSuggestionClick = (ingredient) => {
    addIngredient(ingredient);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Available Ingredients
      </label>
      
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
          placeholder="Type an ingredient and press Enter..."
          onFocus={() => setShowSuggestions(suggestions.length > 0)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {suggestions.map((ingredient, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSuggestionClick(ingredient)}
                className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none transition-colors"
              >
                {ingredient}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Ingredients */}
      {ingredients.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-300 mb-2">
            Selected Ingredients ({ingredients.length}):
          </p>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 border border-blue-700 transition-all duration-200 hover:bg-blue-800/50"
              >
                {ingredient}
                <button
                  type="button"
                  onClick={() => removeIngredient(ingredient)}
                  className="ml-2 text-blue-400 hover:text-blue-200 focus:outline-none"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Quick Add Common Ingredients */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-300 mb-2">
          Quick Add:
        </p>
        <div className="flex flex-wrap gap-2">
          {COMMON_INGREDIENTS.slice(0, 12).map((ingredient, index) => (
            !ingredients.includes(ingredient) && (
              <button
                key={index}
                type="button"
                onClick={() => addIngredient(ingredient)}
                className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full hover:bg-blue-900/50 hover:text-blue-300 transition-colors border border-gray-600 hover:border-blue-700"
              >
                + {ingredient}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientInput;