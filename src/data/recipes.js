const sampleRecipes = [
  {
    "id": "indian_001",
    "title": "Dal Tadka",
    "description": "A comforting North Indian dish made with yellow lentils, tempered with ghee, garlic, and spices.",
    "prepTime": "15 minutes",
    "cookTime": "30 minutes",
    "totalTime": "45 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "1 cup toor dal (pigeon peas)",
      "3 cups water",
      "1 medium onion, finely chopped",
      "2 tomatoes, chopped",
      "2 green chilies, slit",
      "1 teaspoon turmeric powder",
      "1 teaspoon red chili powder",
      "1 teaspoon cumin seeds",
      "4 garlic cloves, finely chopped",
      "2 tablespoons ghee",
      "2 tablespoons fresh coriander leaves, chopped",
      "Salt to taste"
    ],
    "instructions": [
      "Rinse the toor dal thoroughly in water until the water runs clear.",
      "Add dal, turmeric, salt, and water to a pressure cooker. Cook for 3–4 whistles until the dal becomes soft and mushy.",
      "Once pressure releases, mash the dal with the back of a spoon and keep aside.",
      "In a pan, heat ghee. Add cumin seeds and let them splutter.",
      "Add garlic and sauté until golden brown.",
      "Add onions and green chilies. Cook until onions turn translucent.",
      "Add tomatoes and cook until they soften and release oil.",
      "Add red chili powder and mix well.",
      "Pour the cooked dal into the pan. Simmer for 5–7 minutes on low heat.",
      "Garnish with coriander leaves and serve hot with rice or roti."
    ],
    "nutrition": {
      "calories": "180 kcal per serving",
      "protein": "9g",
      "fat": "5g",
      "carbs": "28g",
      "fiber": "6g"
    },
    "tips": [
      "Add a spoon of lemon juice before serving for extra freshness.",
      "You can replace toor dal with moong dal for a lighter version."
    ]
  },
  {
    "id": "indian_002",
    "title": "Aloo Gobi",
    "description": "A dry curry made with potatoes (aloo) and cauliflower (gobi), flavored with Indian spices.",
    "prepTime": "15 minutes",
    "cookTime": "25 minutes",
    "totalTime": "40 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "2 medium potatoes, peeled and cubed",
      "2 cups cauliflower florets",
      "1 onion, finely chopped",
      "2 tomatoes, chopped",
      "2 green chilies, slit",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric powder",
      "1 teaspoon coriander powder",
      "1 teaspoon garam masala",
      "1 teaspoon red chili powder",
      "2 tablespoons oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Heat oil in a pan and add cumin seeds.",
      "Once cumin splutters, add onions and sauté until golden brown.",
      "Add green chilies and tomatoes. Cook until tomatoes soften.",
      "Add turmeric, coriander powder, and red chili powder. Mix well.",
      "Add potatoes and cauliflower florets. Stir to coat with spices.",
      "Cover with a lid and cook on medium flame for 15–20 minutes, stirring occasionally.",
      "Once the vegetables are tender, add garam masala and salt. Mix well.",
      "Cook uncovered for 2–3 minutes to let flavors blend.",
      "Garnish with coriander leaves and serve hot with chapati or rice."
    ],
    "nutrition": {
      "calories": "150 kcal per serving",
      "protein": "4g",
      "fat": "7g",
      "carbs": "22g",
      "fiber": "5g"
    },
    "tips": [
      "For extra flavor, add a pinch of amchur (dry mango powder) at the end.",
      "Do not overcook cauliflower; it should remain slightly firm."
    ]
  },
  {
    "id": "indian_003",
    "title": "Chole (Chickpea Curry)",
    "description": "A spicy and tangy North Indian curry made with chickpeas and aromatic spices.",
    "prepTime": "20 minutes (plus soaking)",
    "cookTime": "40 minutes",
    "totalTime": "1 hour",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "1 cup dried chickpeas (soaked overnight) or 2 cups canned chickpeas",
      "2 medium onions, finely chopped",
      "2 tomatoes, pureed",
      "2 green chilies, slit",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1 bay leaf",
      "1 teaspoon turmeric powder",
      "2 teaspoons coriander powder",
      "1 teaspoon cumin powder",
      "1 teaspoon garam masala",
      "1 teaspoon chole masala (optional)",
      "2 tablespoons oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Pressure cook the soaked chickpeas with 3 cups water and a pinch of salt until soft (or drain canned chickpeas).",
      "Heat oil in a pan. Add cumin seeds and bay leaf.",
      "Add onions and sauté until golden brown.",
      "Add ginger-garlic paste and cook for 1–2 minutes until fragrant.",
      "Add pureed tomatoes and green chilies. Cook until oil separates.",
      "Add turmeric, coriander powder, cumin powder, and salt. Mix well.",
      "Add cooked chickpeas along with some of the cooking liquid.",
      "Simmer for 15–20 minutes until curry thickens.",
      "Add garam masala and chole masala. Mix and cook for 2 more minutes.",
      "Garnish with coriander leaves and serve hot with bhature, puri, or rice."
    ],
    "nutrition": {
      "calories": "220 kcal per serving",
      "protein": "11g",
      "fat": "8g",
      "carbs": "32g",
      "fiber": "9g"
    },
    "tips": [
      "Soak chickpeas overnight for best results.",
      "For a richer taste, add a tablespoon of butter at the end."
    ]
  },
  {
    "id": "indian_004",
    "title": "Paneer Butter Masala",
    "description": "A rich and creamy curry made with paneer cubes simmered in a tomato and cashew-based gravy.",
    "prepTime": "20 minutes",
    "cookTime": "30 minutes",
    "totalTime": "50 minutes",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "250g paneer, cubed",
      "3 large tomatoes, pureed",
      "1 onion, finely chopped",
      "1 tablespoon ginger-garlic paste",
      "10 cashews, soaked",
      "2 tablespoons butter",
      "2 tablespoons cream",
      "1 teaspoon red chili powder",
      "1 teaspoon turmeric powder",
      "1 teaspoon garam masala",
      "1 teaspoon cumin seeds",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Blend soaked cashews with little water to form a smooth paste.",
      "Heat butter in a pan and add cumin seeds.",
      "Add onions and sauté until golden.",
      "Add ginger-garlic paste and cook for 1–2 minutes.",
      "Add pureed tomatoes and cook until oil separates.",
      "Add turmeric, chili powder, and cashew paste. Mix well and cook 5 minutes.",
      "Add paneer cubes and salt. Simmer gently for 10 minutes.",
      "Add cream and garam masala. Stir well and cook for 2 minutes.",
      "Garnish with coriander and serve hot with naan or rice."
    ],
    "nutrition": {
      "calories": "300 kcal per serving",
      "protein": "12g",
      "fat": "20g",
      "carbs": "18g",
      "fiber": "3g"
    },
    "tips": [
      "Soak paneer cubes in warm water before cooking to keep them soft.",
      "Add a pinch of sugar for balancing tomato tanginess."
    ]
  },
  {
    "id": "indian_005",
    "title": "Vegetable Biryani",
    "description": "A fragrant rice dish cooked with mixed vegetables and aromatic spices.",
    "prepTime": "30 minutes",
    "cookTime": "45 minutes",
    "totalTime": "1 hour 15 minutes",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "2 cups basmati rice, soaked 30 min",
      "2 cups mixed vegetables (carrot, beans, peas, potato)",
      "1 onion, thinly sliced",
      "2 tomatoes, chopped",
      "2 green chilies",
      "2 tablespoons yogurt",
      "1 tablespoon ginger-garlic paste",
      "2 bay leaves",
      "4 cloves, 2 cardamoms, 1 cinnamon stick",
      "1 teaspoon turmeric powder",
      "1 teaspoon biryani masala",
      "3 tablespoons oil/ghee",
      "Salt to taste",
      "Fresh coriander and mint for garnish"
    ],
    "instructions": [
      "Cook rice until 70% done. Drain and keep aside.",
      "Heat ghee in a pan. Add whole spices and sauté.",
      "Add onions and fry till golden brown.",
      "Add ginger-garlic paste and cook till fragrant.",
      "Add tomatoes, yogurt, turmeric, and biryani masala. Cook till oil separates.",
      "Add vegetables and cook for 5–7 minutes.",
      "In a pot, layer half rice, then vegetables, then rest of rice.",
      "Sprinkle coriander and mint. Cover tightly and cook on low flame for 20 minutes (dum).",
      "Fluff gently and serve hot with raita."
    ],
    "nutrition": {
      "calories": "350 kcal per serving",
      "protein": "8g",
      "fat": "12g",
      "carbs": "55g",
      "fiber": "6g"
    },
    "tips": [
      "Use long-grain basmati rice for authentic texture.",
      "Seal the pot edges with dough for traditional dum cooking."
    ]
  },
  {
    "id": "indian_006",
    "title": "Rajma Masala",
    "description": "A hearty North Indian curry made with red kidney beans in a spicy tomato-onion gravy.",
    "prepTime": "20 minutes (plus soaking)",
    "cookTime": "40 minutes",
    "totalTime": "1 hour",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "1 cup rajma (red kidney beans), soaked overnight",
      "2 onions, finely chopped",
      "2 tomatoes, pureed",
      "1 tablespoon ginger-garlic paste",
      "2 green chilies",
      "1 teaspoon cumin seeds",
      "1 bay leaf",
      "1 teaspoon turmeric powder",
      "2 teaspoons coriander powder",
      "1 teaspoon red chili powder",
      "1 teaspoon garam masala",
      "2 tablespoons oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Pressure cook soaked rajma with salt until soft.",
      "Heat oil in a pan. Add cumin seeds and bay leaf.",
      "Add onions and sauté until golden.",
      "Add ginger-garlic paste and green chilies. Cook 1 minute.",
      "Add tomato puree and cook till oil separates.",
      "Add turmeric, coriander, chili powder, and mix well.",
      "Add cooked rajma with some water. Simmer for 20 minutes.",
      "Add garam masala, mix well, and cook 2 minutes.",
      "Garnish with coriander. Serve with steamed rice."
    ],
    "nutrition": {
      "calories": "230 kcal per serving",
      "protein": "12g",
      "fat": "7g",
      "carbs": "32g",
      "fiber": "9g"
    },
    "tips": [
      "Mash a few rajma beans to thicken gravy.",
      "Always soak rajma overnight for proper digestion."
    ]
  },
  {
    "id": "indian_007",
    "title": "Poha",
    "description": "A light and healthy breakfast made with flattened rice, peanuts, and spices.",
    "prepTime": "10 minutes",
    "cookTime": "15 minutes",
    "totalTime": "25 minutes",
    "servings": 3,
    "difficulty": "Easy",
    "ingredients": [
      "2 cups poha (flattened rice)",
      "1 onion, finely chopped",
      "1 potato, small cubes",
      "2 green chilies, chopped",
      "1 teaspoon mustard seeds",
      "10 curry leaves",
      "2 tablespoons peanuts",
      "1 teaspoon turmeric powder",
      "2 tablespoons oil",
      "Salt to taste",
      "Fresh coriander and lemon wedges for garnish"
    ],
    "instructions": [
      "Rinse poha in water, drain, and keep aside (do not soak).",
      "Heat oil in a pan. Add mustard seeds and let them splutter.",
      "Add curry leaves, green chilies, and peanuts. Fry till golden.",
      "Add onions and potatoes. Cook till potatoes are soft.",
      "Add turmeric and salt. Mix well.",
      "Add rinsed poha, gently mix, and cook for 2 minutes.",
      "Garnish with coriander and serve with lemon."
    ],
    "nutrition": {
      "calories": "180 kcal per serving",
      "protein": "4g",
      "fat": "7g",
      "carbs": "28g",
      "fiber": "4g"
    },
    "tips": [
      "Do not soak poha in water for long; it becomes mushy.",
      "Add grated coconut for a South Indian twist."
    ]
  },
  {
    "id": "indian_008",
    "title": "Masoor Dal",
    "description": "A simple and nutritious red lentil curry cooked with onions, tomatoes, and spices.",
    "prepTime": "10 minutes",
    "cookTime": "20 minutes",
    "totalTime": "30 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "1 cup masoor dal (red lentils)",
      "3 cups water",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "2 green chilies",
      "1 teaspoon turmeric powder",
      "1 teaspoon cumin seeds",
      "1 teaspoon red chili powder",
      "2 tablespoons oil/ghee",
      "Salt to taste",
      "Coriander leaves for garnish"
    ],
    "instructions": [
      "Rinse masoor dal well and add to a pressure cooker with water, turmeric, and salt. Cook for 3 whistles.",
      "In a pan, heat oil/ghee and add cumin seeds.",
      "Add onions and sauté until golden brown.",
      "Add tomatoes and green chilies. Cook till soft.",
      "Add chili powder and stir well.",
      "Add cooked dal to the pan and simmer for 5 minutes.",
      "Garnish with coriander and serve hot with rice or chapati."
    ],
    "nutrition": {
      "calories": "160 kcal per serving",
      "protein": "10g",
      "fat": "4g",
      "carbs": "24g",
      "fiber": "5g"
    },
    "tips": [
      "You can add spinach for extra nutrition.",
      "Add a spoon of ghee before serving for richer taste."
    ]
  },
  {
    "id": "indian_009",
    "title": "Bhindi Masala",
    "description": "A dry curry made with okra (bhindi) stir-fried with onions, tomatoes, and spices.",
    "prepTime": "15 minutes",
    "cookTime": "20 minutes",
    "totalTime": "35 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "250g bhindi (okra), chopped",
      "1 onion, sliced",
      "2 tomatoes, chopped",
      "2 green chilies",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric powder",
      "1 teaspoon coriander powder",
      "1 teaspoon garam masala",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    "instructions": [
      "Wash and dry bhindi completely to avoid stickiness.",
      "Heat oil in a pan. Add cumin seeds.",
      "Add onions and sauté till golden.",
      "Add tomatoes and cook till soft.",
      "Add turmeric, coriander powder, and mix well.",
      "Add chopped bhindi and cook on medium heat, stirring occasionally.",
      "Cook until bhindi is soft and oil starts separating.",
      "Add garam masala, mix, and cook for 2 minutes.",
      "Serve hot with chapati."
    ],
    "nutrition": {
      "calories": "120 kcal per serving",
      "protein": "3g",
      "fat": "6g",
      "carbs": "15g",
      "fiber": "4g"
    },
    "tips": [
      "Pat dry bhindi completely before chopping to reduce sliminess.",
      "Cook on medium flame without covering to avoid mushiness."
    ]
  },
  {
    "id": "indian_010",
    "title": "Curd Rice",
    "description": "A South Indian comfort dish made with yogurt, rice, and tempered spices.",
    "prepTime": "10 minutes",
    "cookTime": "15 minutes",
    "totalTime": "25 minutes",
    "servings": 3,
    "difficulty": "Easy",
    "ingredients": [
      "1 cup cooked rice",
      "1 cup curd (yogurt)",
      "2 green chilies",
      "1 teaspoon mustard seeds",
      "1 teaspoon urad dal",
      "1 sprig curry leaves",
      "1 tablespoon oil",
      "Salt to taste",
      "Coriander leaves for garnish"
    ],
    "instructions": [
      "Mash cooked rice lightly and let it cool.",
      "Add curd and salt. Mix well until creamy.",
      "Heat oil in a small pan. Add mustard seeds, urad dal, curry leaves, and green chilies.",
      "Pour the tempering over the curd rice and mix well.",
      "Garnish with coriander and serve chilled or at room temperature."
    ],
    "nutrition": {
      "calories": "150 kcal per serving",
      "protein": "5g",
      "fat": "4g",
      "carbs": "24g",
      "fiber": "2g"
    },
    "tips": [
      "Use slightly cooled rice; hot rice may curdle yogurt.",
      "Add pomegranate seeds or grated carrots for extra freshness."
    ]
  },
  {
    "id": "indian_011",
    "title": "Sambar",
    "description": "A South Indian lentil-based stew made with tamarind, vegetables, and spices.",
    "prepTime": "20 minutes",
    "cookTime": "40 minutes",
    "totalTime": "1 hour",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "1 cup toor dal",
      "1 lemon-sized ball tamarind",
      "1 drumstick, cut into pieces",
      "1 carrot, chopped",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "2 green chilies",
      "2 tablespoons sambar powder",
      "1/2 teaspoon turmeric powder",
      "2 tablespoons oil",
      "1 teaspoon mustard seeds",
      "1 sprig curry leaves",
      "2 dried red chilies",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Cook toor dal with turmeric in a pressure cooker until soft, mash and keep aside.",
      "Soak tamarind in warm water and extract pulp.",
      "In a pot, cook drumstick, carrot, onion, and tomatoes until tender.",
      "Add tamarind pulp, sambar powder, salt, and simmer for 10 minutes.",
      "Add cooked dal and mix well. Simmer for another 10 minutes.",
      "Heat oil in a small pan, add mustard seeds, curry leaves, and dried red chilies. Pour tempering into sambar.",
      "Garnish with coriander and serve with rice or idli."
    ],
    "nutrition": {
      "calories": "190 kcal per serving",
      "protein": "8g",
      "fat": "6g",
      "carbs": "28g",
      "fiber": "5g"
    },
    "tips": [
      "Add a teaspoon of jaggery for a sweet balance.",
      "Use fresh homemade sambar powder for authentic flavor."
    ]
  },
  {
    "id": "indian_012",
    "title": "Upma",
    "description": "A popular South Indian breakfast dish made with semolina and tempered spices.",
    "prepTime": "10 minutes",
    "cookTime": "15 minutes",
    "totalTime": "25 minutes",
    "servings": 3,
    "difficulty": "Easy",
    "ingredients": [
      "1 cup rava (semolina)",
      "2 cups water",
      "1 onion, chopped",
      "2 green chilies",
      "1 teaspoon mustard seeds",
      "1 teaspoon urad dal",
      "10 curry leaves",
      "1 tablespoon ghee or oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Dry roast semolina until slightly golden and keep aside.",
      "Heat ghee in a pan, add mustard seeds, urad dal, curry leaves, and green chilies.",
      "Add onions and sauté until translucent.",
      "Boil water in a separate pot with salt.",
      "Slowly add roasted semolina while stirring to avoid lumps.",
      "Cook for 3–4 minutes until fluffy.",
      "Garnish with coriander and serve hot."
    ],
    "nutrition": {
      "calories": "200 kcal per serving",
      "protein": "5g",
      "fat": "6g",
      "carbs": "32g",
      "fiber": "3g"
    },
    "tips": [
      "Add vegetables like peas, carrot, or beans for a wholesome version.",
      "Use ghee for richer taste."
    ]
  },
  {
    "id": "indian_013",
    "title": "Pav Bhaji",
    "description": "A famous Mumbai street food consisting of spicy mashed vegetables served with buttered pav.",
    "prepTime": "20 minutes",
    "cookTime": "30 minutes",
    "totalTime": "50 minutes",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "4 pav buns",
      "2 potatoes, boiled and mashed",
      "1 cup mixed vegetables (peas, carrot, beans, cauliflower)",
      "1 onion, finely chopped",
      "2 tomatoes, chopped",
      "2 green chilies",
      "2 tablespoons pav bhaji masala",
      "1 teaspoon red chili powder",
      "2 tablespoons butter",
      "2 tablespoons oil",
      "Salt to taste",
      "Coriander and lemon for garnish"
    ],
    "instructions": [
      "Boil and mash vegetables.",
      "Heat oil and butter in a pan, add onions and sauté until golden.",
      "Add tomatoes, green chilies, and cook till mushy.",
      "Add pav bhaji masala, chili powder, and salt. Cook for 5 minutes.",
      "Add mashed vegetables, mix well, and simmer for 15 minutes.",
      "Toast pav buns with butter on a tawa.",
      "Serve bhaji with buttered pav, coriander, and lemon wedges."
    ],
    "nutrition": {
      "calories": "300 kcal per serving",
      "protein": "8g",
      "fat": "12g",
      "carbs": "42g",
      "fiber": "6g"
    },
    "tips": [
      "Add a cube of butter on top before serving for authentic taste.",
      "Mash bhaji thoroughly for a smooth consistency."
    ]
  },
  {
    "id": "indian_014",
    "title": "Kadhi Pakora",
    "description": "A tangy yogurt-based curry with gram flour fritters.",
    "prepTime": "20 minutes",
    "cookTime": "40 minutes",
    "totalTime": "1 hour",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "2 cups yogurt",
      "4 tablespoons besan (gram flour)",
      "1 onion, sliced",
      "2 green chilies",
      "1 teaspoon turmeric powder",
      "1 teaspoon cumin seeds",
      "1 teaspoon mustard seeds",
      "1 sprig curry leaves",
      "Oil for frying",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Whisk yogurt with besan, turmeric, and water to form kadhi mixture.",
      "Cook on low flame, stirring continuously, until it thickens.",
      "For pakoras, mix besan, onion, salt, and water into a thick batter.",
      "Deep fry spoonfuls of batter until golden brown.",
      "Add pakoras to simmering kadhi and cook 10 minutes.",
      "Prepare tempering with oil, cumin, mustard, curry leaves, and green chilies. Pour over kadhi.",
      "Garnish and serve hot with rice."
    ],
    "nutrition": {
      "calories": "250 kcal per serving",
      "protein": "9g",
      "fat": "12g",
      "carbs": "28g",
      "fiber": "4g"
    },
    "tips": [
      "Use sour yogurt for authentic flavor.",
      "Add pakoras just before serving to keep them soft inside but not mushy."
    ]
  },
  {
    "id": "indian_015",
    "title": "Baingan Bharta",
    "description": "A smoky-flavored mashed eggplant curry with onions, tomatoes, and spices.",
    "prepTime": "15 minutes",
    "cookTime": "25 minutes",
    "totalTime": "40 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "1 large eggplant",
      "2 onions, chopped",
      "2 tomatoes, chopped",
      "2 green chilies",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric powder",
      "1 teaspoon red chili powder",
      "2 tablespoons oil",
      "Salt to taste",
      "Coriander leaves for garnish"
    ],
    "instructions": [
      "Roast eggplant on open flame until skin is charred. Peel and mash.",
      "Heat oil in a pan, add cumin seeds.",
      "Add onions and sauté until golden brown.",
      "Add ginger-garlic paste, tomatoes, and green chilies. Cook till mushy.",
      "Add turmeric, chili powder, and salt. Mix well.",
      "Add mashed eggplant and cook for 10 minutes.",
      "Garnish with coriander and serve with roti."
    ],
    "nutrition": {
      "calories": "150 kcal per serving",
      "protein": "3g",
      "fat": "7g",
      "carbs": "18g",
      "fiber": "5g"
    },
    "tips": [
      "Roast eggplant directly on flame for smoky flavor.",
      "Add a little mustard oil for extra punch."
    ]
  },
  {
    "id": "indian_016",
    "title": "Matar Paneer",
    "description": "A popular North Indian curry made with paneer and green peas in tomato gravy.",
    "prepTime": "15 minutes",
    "cookTime": "25 minutes",
    "totalTime": "40 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "200g paneer, cubed",
      "1 cup green peas",
      "2 onions, chopped",
      "2 tomatoes, pureed",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric powder",
      "1 teaspoon garam masala",
      "1 teaspoon red chili powder",
      "2 tablespoons oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    "instructions": [
      "Heat oil in a pan, add cumin seeds.",
      "Add onions and sauté until golden brown.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add tomato puree, turmeric, chili powder, and salt. Cook until oil separates.",
      "Add peas and cook 5 minutes.",
      "Add paneer cubes and garam masala. Simmer for 10 minutes.",
      "Garnish with coriander and serve hot with roti or rice."
    ],
    "nutrition": {
      "calories": "280 kcal per serving",
      "protein": "12g",
      "fat": "16g",
      "carbs": "20g",
      "fiber": "4g"
    },
    "tips": [
      "Soak paneer in warm water for 10 minutes before cooking to make it soft.",
      "Add cream for a richer version."
    ]
  },
  {
    "id": "indian_017",
    "title": "Idli",
    "description": "Soft and fluffy South Indian steamed rice cakes served with chutney and sambar.",
    "prepTime": "12 hours (fermentation)",
    "cookTime": "15 minutes",
    "totalTime": "12 hours 15 minutes",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "2 cups idli rice",
      "1 cup urad dal",
      "1/2 teaspoon fenugreek seeds",
      "Salt to taste",
      "Water as needed"
    ],
    "instructions": [
      "Soak rice, urad dal, and fenugreek seeds separately for 6 hours.",
      "Grind urad dal into smooth fluffy batter. Grind rice coarsely.",
      "Mix batters, add salt, and let ferment overnight.",
      "Pour batter into greased idli molds and steam for 10–12 minutes.",
      "Serve hot with chutney and sambar."
    ],
    "nutrition": {
      "calories": "120 kcal per idli",
      "protein": "4g",
      "fat": "1g",
      "carbs": "24g",
      "fiber": "2g"
    },
    "tips": [
      "Ferment batter in a warm place for best results.",
      "Add a little poha while grinding for extra softness."
    ]
  },
  {
    "id": "indian_018",
    "title": "Dosa",
    "description": "A thin and crispy South Indian crepe made from fermented rice and lentil batter.",
    "prepTime": "12 hours (fermentation)",
    "cookTime": "10 minutes",
    "totalTime": "12 hours 10 minutes",
    "servings": 4,
    "difficulty": "Medium",
    "ingredients": [
      "2 cups dosa rice",
      "1 cup urad dal",
      "1/2 teaspoon fenugreek seeds",
      "Salt to taste",
      "Oil for cooking"
    ],
    "instructions": [
      "Soak rice, urad dal, and fenugreek seeds for 6 hours.",
      "Grind into a smooth batter and ferment overnight.",
      "Heat a tawa and pour batter, spreading thinly.",
      "Drizzle oil around edges and cook until golden and crisp.",
      "Serve hot with chutney and sambar."
    ],
    "nutrition": {
      "calories": "150 kcal per dosa",
      "protein": "4g",
      "fat": "3g",
      "carbs": "28g",
      "fiber": "2g"
    },
    "tips": [
      "Cook on medium flame for crisp texture.",
      "Add a little semolina to batter if it’s too thin."
    ]
  },
  {
    "id": "indian_019",
    "title": "Palak Paneer",
    "description": "A creamy spinach curry with paneer cubes cooked in mild spices.",
    "prepTime": "15 minutes",
    "cookTime": "20 minutes",
    "totalTime": "35 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "250g paneer, cubed",
      "3 cups spinach leaves",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 green chili",
      "1 teaspoon cumin seeds",
      "1 teaspoon garam masala",
      "2 tablespoons cream",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    "instructions": [
      "Blanch spinach in hot water, then blend into smooth puree.",
      "Heat oil in a pan, add cumin seeds.",
      "Add onions and sauté until golden brown.",
      "Add ginger-garlic paste, tomatoes, and chili. Cook until mushy.",
      "Add spinach puree, salt, and simmer 5 minutes.",
      "Add paneer cubes, garam masala, and cream. Cook 5 minutes.",
      "Serve hot with naan or rice."
    ],
    "nutrition": {
      "calories": "250 kcal per serving",
      "protein": "10g",
      "fat": "15g",
      "carbs": "18g",
      "fiber": "4g"
    },
    "tips": [
      "Do not overcook spinach, it may turn bitter.",
      "Add a pinch of kasuri methi for extra flavor."
    ]
  },
  {
    "id": "indian_020",
    "title": "Vegetable Pulao",
    "description": "A quick and mildly spiced rice dish with vegetables.",
    "prepTime": "15 minutes",
    "cookTime": "30 minutes",
    "totalTime": "45 minutes",
    "servings": 4,
    "difficulty": "Easy",
    "ingredients": [
      "2 cups basmati rice",
      "2 cups mixed vegetables",
      "1 onion, sliced",
      "2 green chilies",
      "2 bay leaves, 4 cloves, 2 cardamoms",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric powder",
      "1 teaspoon garam masala",
      "2 tablespoons oil/ghee",
      "Salt to taste"
    ],
    "instructions": [
      "Wash and soak rice for 20 minutes.",
      "Heat oil, add cumin seeds and whole spices.",
      "Add onions and sauté until golden.",
      "Add vegetables, turmeric, and salt. Stir fry for 5 minutes.",
      "Add rice and 4 cups water. Mix well.",
      "Cook covered on low flame until rice is done.",
      "Sprinkle garam masala and fluff before serving."
    ],
    "nutrition": {
      "calories": "280 kcal per serving",
      "protein": "6g",
      "fat": "9g",
      "carbs": "44g",
      "fiber": "4g"
    },
    "tips": [
      "Use basmati rice for fragrance.",
      "Add fried cashews and raisins for festive pulao."
    ]
  }
];


export default sampleRecipes;
