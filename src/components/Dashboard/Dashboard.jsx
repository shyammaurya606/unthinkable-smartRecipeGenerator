import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import RecipeGenerator from '../RecipeGenerator/RecipeGenerator';
import FavoriteRecipes from './FavoriteRecipes';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('generate');
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFavoriteRecipes();
  }, [user]);

  const fetchFavoriteRecipes = async () => {
    try {
      const { data, error } = await supabase
        .from('favorite_recipes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFavoriteRecipes(data || []);
    } catch (error) {
      console.error('Error fetching favorite recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveRecipe = async (recipe) => {
    try {
      const { error } = await supabase
        .from('favorite_recipes')
        .insert([
          {
            user_id: user.id,
            recipe_data: recipe,
            title: recipe.title,
          }
        ]);

      if (error) throw error;
      
      // Refresh favorites list
      fetchFavoriteRecipes();
      
      return true;
    } catch (error) {
      console.error('Error saving recipe:', error);
      return false;
    }
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      const { error } = await supabase
        .from('favorite_recipes')
        .delete()
        .eq('id', recipeId)
        .eq('user_id', user.id);

      if (error) throw error;
      
      // Refresh favorites list
      fetchFavoriteRecipes();
      
      return true;
    } catch (error) {
      console.error('Error deleting recipe:', error);
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                Recipe<span className="text-blue-400">AI</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">
                Welcome, {user.email}
              </span>
              <button
                onClick={onLogout}
                className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="border-b border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('generate')}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'generate'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              🍳 Generate Recipe
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'favorites'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              ❤️ My Favorites ({favoriteRecipes.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'generate' && (
          <RecipeGenerator 
            user={user} 
            onSaveRecipe={handleSaveRecipe}
            favoriteRecipes={favoriteRecipes}
          />
        )}
        {activeTab === 'favorites' && (
          <FavoriteRecipes
            recipes={favoriteRecipes}
            loading={loading}
            onDeleteRecipe={handleDeleteRecipe}
            onRefresh={fetchFavoriteRecipes}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;