"use client"; 

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onDeleteItem, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
  
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
        <main className="flex-row">
            <div className="flex-row">
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
            <ul className="flex-auto items-center">
                {items.map((item) => (
                    <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name} 
                        category={item.category} 
                        quantity={item.quantity} 
                        onDeleteItem={onDeleteItem} 
                        onSelect={() => handleClick(item.name)}
                    />
                 ))}
            </ul>
        </main>
    );
}