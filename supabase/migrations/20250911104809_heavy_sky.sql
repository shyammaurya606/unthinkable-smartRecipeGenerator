/*
  # Create favorite recipes table with proper RLS policies

  1. New Tables
    - `favorite_recipes`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `recipe_data` (jsonb, stores complete recipe information)
      - `title` (text, recipe title for quick reference)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `favorite_recipes` table
    - Add policy for authenticated users to insert their own recipes
    - Add policy for authenticated users to read their own recipes
    - Add policy for authenticated users to update their own recipes
    - Add policy for authenticated users to delete their own recipes

  3. Indexes
    - Index on user_id for faster queries
    - Index on created_at for sorting
*/

-- Create the favorite_recipes table
CREATE TABLE IF NOT EXISTS favorite_recipes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  recipe_data jsonb NOT NULL,
  title text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE favorite_recipes ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for all CRUD operations

-- Policy for INSERT: Users can insert their own recipes
CREATE POLICY "Users can insert their own favorite recipes"
  ON favorite_recipes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy for SELECT: Users can read their own recipes
CREATE POLICY "Users can read their own favorite recipes"
  ON favorite_recipes
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy for UPDATE: Users can update their own recipes
CREATE POLICY "Users can update their own favorite recipes"
  ON favorite_recipes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy for DELETE: Users can delete their own recipes
CREATE POLICY "Users can delete their own favorite recipes"
  ON favorite_recipes
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_favorite_recipes_user_id 
  ON favorite_recipes(user_id);

CREATE INDEX IF NOT EXISTS idx_favorite_recipes_created_at 
  ON favorite_recipes(created_at DESC);