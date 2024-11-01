"use client"; 

import itemsJson from "./items.json";
import { useState } from "react";


export function ItemList () {

  const [sortBy, setSortBy] = useState("name");
  let items = [...itemsJson];

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <main>
      <div className="Flex ...">
        <label className="m-2 text-2xl font-bold">Sort By: </label>
        <button 
          onClick={() => handleSortChange("name")} 
          className="flex-auto w-32 p-2 m-2 bg-blue-500 text-white rounded-lg"
          style={{ backgroundColor: sortBy === "name" ? "#4CAF50" : "#e0e0e0", color: sortBy === "name" ? "#ffffff" : "#000000" }}
        >
          Name
        </button>
        <button 
          onClick={() => handleSortChange("category")} 
          className="flex-auto w-32 p-2 m-2 bg-blue-500 text-white rounded-lg"
          style={{ backgroundColor: sortBy === "category" ? "#4CAF50" : "#e0e0e0", color: sortBy === "category" ? "#ffffff" : "#000000" }}
        >
          Category
        </button>
      </div>

      <ul className="flex...">
        {items.map((item, index) => (
          <ul key={index} className="flex-auto w-64 p-2 m-4 rounded-lg bg-slate-700">
            <li>{item.name}</li> 
            <li>Buy in: {item.category}</li></ul>))}
      </ul> 
    </main>
  );
}
export default ItemList;