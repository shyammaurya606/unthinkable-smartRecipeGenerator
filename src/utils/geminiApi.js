const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export const generateRecipe = async (ingredients, dietaryPreferences) => {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not found. Please set VITE_GEMINI_API_KEY in your .env file');
  }

  const dietaryText = dietaryPreferences.length > 0 
    ? ` The recipe should be ${dietaryPreferences.join(', ')}.` 
    : '';

  const prompt = `Create a detailed recipe using these ingredients: ${ingredients.join(', ')}.${dietaryText}

Please provide the response in the following JSON format:
{
  "title": "Recipe Name",
  "description": "Brief description of the dish",
  "prepTime": "15 minutes",
  "cookTime": "30 minutes",
  "totalTime": "45 minutes",
  "difficulty": "Easy",
  "servings": 4,
  "ingredients": [
    "1 cup ingredient 1",
    "2 tbsp ingredient 2"
  ],
  "instructions": [
    "Step 1 description",
    "Step 2 description"
  ],
  "nutrition": {
    "calories": 350,
    "protein": "25g",
    "carbs": "30g",
    "fat": "15g",
    "fiber": "5g"
  },
  "tips": [
    "Helpful tip 1",
    "Helpful tip 2"
  ]
}

Make sure the recipe is practical and uses common cooking methods. Include accurate nutritional estimates.`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error Response:', errorData);
      
      if (response.status === 404) {
        throw new Error('API endpoint not found. Please check your Gemini API configuration.');
      } else if (response.status === 403) {
        throw new Error('API key is invalid or has insufficient permissions.');
      } else if (response.status === 429) {
        throw new Error('API rate limit exceeded. Please try again later.');
      } else {
        throw new Error(`API request failed with status ${response.status}: ${errorData}`);
      }
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      console.error('Invalid API Response:', data);
      throw new Error('Invalid response from Gemini API. Please try again.');
    }

    const recipeText = data.candidates[0].content.parts[0].text;
    
    // Extract JSON from the response
    const jsonMatch = recipeText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Could not parse JSON from response:', recipeText);
      throw new Error('Could not parse recipe data from API response. Please try again.');
    }

    try {
      const recipeData = JSON.parse(jsonMatch[0]);
      
      // Add generated timestamp and ID
      recipeData.generatedAt = new Date().toISOString();
      recipeData.id = Date.now().toString();
      
      return recipeData;
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      throw new Error('Failed to parse recipe data. Please try again.');
    }
    
  } catch (error) {
    console.error('Error generating recipe:', error);
    
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection and try again.');
    }
    
    throw error;
  }
};