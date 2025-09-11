/*
  # Create favorite recipes table

  1. New Tables
    - `favorite_recipes`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `recipe_data` (jsonb, stores the complete recipe information)
      - `title` (text, recipe title for easy searching)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `favorite_recipes` table
    - Add policy for users to manage their own favorite recipes
*/

CREATE TABLE IF NOT EXISTS favorite_recipes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  recipe_data jsonb NOT NULL,
  title text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE favorite_recipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own favorite recipes"
  ON favorite_recipes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_favorite_recipes_user_id ON favorite_recipes(user_id);
CREATE INDEX IF NOT EXISTS idx_favorite_recipes_created_at ON favorite_recipes(created_at DESC);