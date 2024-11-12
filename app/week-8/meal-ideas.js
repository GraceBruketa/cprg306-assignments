"use client";

import { useState } from "react";
import { useEffect } from "react";

function MealIdeas(ingredient) {
    console.log("Ingredient:", ingredient);
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data.meals; // The API returns a list of meals in the 'meals' array
          } catch (error) {
            console.error('Error fetching meal ideas:', error);
            return [];
        };
    };

    const loadMealIdeas = async (ingredient) => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
      };
    
      useEffect(() => {
        if (ingredient) {
          loadMealIdeas(ingredient);
        }
      }, [ingredient]);

    return (
        <div>
          <h2>Meal Ideas for {ingredient}</h2>
          <ul>
            {meals.length === 0 ? (
              <li>No meal ideas found</li>
            ) : (
              meals.map((meal) => (
                <li key={meal.idMeal}>
                  <p>{meal.strMeal}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      );
    };
    
export default MealIdeas;