"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function MealIdeas(ingredient) {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getMeals();
    }, [query]);

    const fetchMealIdeas = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    function LoadMealIdeas(){
        fetchMealIdeas(ingredient);
        const loadMealIdeas = () => setMeals(data.meals);

    }

    return (
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="meals">
                {meals.map((meal) => (
                    <div className="meal">
                        <h1>{meal.strMeal}</h1>
                        <img src={meal.strMealThumb} alt="meal" />
                    </div>
                ))}
            </div>
        </div>
    );
}