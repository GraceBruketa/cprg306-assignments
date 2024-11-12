"use client";

import NewItem from "../week-8/new-item";
import itemData from "./items.json";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState("");

    const handleAddItem = (item) => { 
        setItems([...items, item]);
    }

    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id)); 
    }

    const handleItemSelect = (selectedItem) => {
        const cleanedName = selectedItem
          .split(",")[0]
          .split(" ")
          .slice(0, 2)
          .map((word) => word.replace(/[^\w\s]/g, ""))
          .join(" ")
          .trim();
    
        setSelectedItem(cleanedName);
      };
    return (
        <main>
            <h1 className="m-2 text-4xl font-bold ">Shopping List</h1>
            <div>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onDeleteItem={handleDeleteItem} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItem} /> {}
            </div>
        </main>
    );

}