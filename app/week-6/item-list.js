"use client"; 

import itemsJson from "./items.json";
import { useState } from "react";


export function ItemList () {
  
  let items = [...itemsJson];
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => a.name.localeCompare(b.name));
  items.sort((a, b) => a.category.localeCompare(b.category));

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <label>Sort by: </label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="category">Category</option>
      </select>

      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            {item.name} - Category: {item.category}
          </li>
        ))}
      </ul>
    </div>
  );

}
export default ItemList;