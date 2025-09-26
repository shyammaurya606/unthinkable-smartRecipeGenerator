# Smart Recipe Generator 🍳

**Smart Recipe Generator** is a web application that allows users to generate recipes based on the ingredients they provide. Using advanced AI-powered APIs and pre-built sample recipes, the app delivers personalized recipe suggestions in real-time.  

---

## Features

- **Ingredient-Based Recipe Generation:** Users can input the ingredients they have, and the app generates recipes accordingly.
- **Recipe Categories & Filtering:** Browse recipes by categories and filter based on preferences or ingredients.
- **AI-Powered Suggestions:** Recipes are generated using the **Gemini API** for intelligent and creative recipe ideas.
- **Pre-Built Sample Recipes:** A list of pre-defined recipes is available for quick access and demonstration.
- **User Authentication:** Users can sign up and log in via **Supabase**.
- **Save Favorite Recipes:** Users can save their favorite recipes to their profiles for easy access later.
- **User-Friendly Interface:** Built with **React.js** for a smooth and interactive frontend experience.

---

## Tech Stack

- **Frontend:** React.js, JavaScript
- **Backend & Database:** Supabase
- **API:** Gemini API for recipe generation
- **Data:** Pre-built sample recipe list

---

## Installation

1. Clone the repository:

git clone https://github.com/shyammaurya606/unthinkable-smartRecipeGenerator.git 

cd smart-recipe-generator

Install dependencies:


npm install
Configure environment variables:

Create a .env file in the root directory:


REACT_APP_SUPABASE_URL=your_supabase_url

REACT_APP_SUPABASE_KEY=your_supabase_key

REACT_APP_GEMINI_API_KEY=your_gemini_api_key


Start the development server:
npm start
The app will run on http://localhost:3000.

Usage
Sign up or log in to your account.
Enter the ingredients you have in the search input.
Filter recipes by category or preference.
Click Generate Recipe to view AI-generated recipes or explore pre-built samples.
Save your favorite recipes to your profile for later access.


# Future Enhancements --

voice command to give ingredients details.

Integrate meal planning and shopping list features.

Add user comments and ratings for recipes.
