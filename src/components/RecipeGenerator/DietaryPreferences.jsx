import React from 'react';

const DIETARY_OPTIONS = [
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
  { id: 'vegan', label: 'Vegan', icon: '🌱' },
  { id: 'gluten-free', label: 'Gluten-Free', icon: '🌾' },
  { id: 'dairy-free', label: 'Dairy-Free', icon: '🥛' },
  { id: 'keto', label: 'Keto', icon: '🥑' },
  { id: 'paleo', label: 'Paleo', icon: '🥩' },
  { id: 'low-carb', label: 'Low-Carb', icon: '🥒' },
  { id: 'high-protein', label: 'High-Protein', icon: '💪' },
  { id: 'low-sodium', label: 'Low-Sodium', icon: '🧂' },
  { id: 'heart-healthy', label: 'Heart-Healthy', icon: '❤️' }
];

const DietaryPreferences = ({ preferences, setPreferences }) => {
  const togglePreference = (preferenceId) => {
    if (preferences.includes(preferenceId)) {
      setPreferences(preferences.filter(p => p !== preferenceId));
    } else {
      setPreferences([...preferences, preferenceId]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-3">
        Dietary Preferences (Optional)
      </label>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {DIETARY_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => togglePreference(option.id)}
            className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${
              preferences.includes(option.id) 
                ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600' 
                : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-white'
            }`}
          >
            <span className="mr-2">{option.icon}</span>
            {option.label}
          </button>
        ))}
      </div>

      {preferences.length > 0 && (
        <div className="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
          <p className="text-sm font-medium text-blue-300 mb-1">
            Selected Preferences:
          </p>
          <p className="text-sm text-blue-200">
            {preferences.map(pref => 
              DIETARY_OPTIONS.find(opt => opt.id === pref)?.label
            ).join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default DietaryPreferences;