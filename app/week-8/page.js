"use client";

import NewItem from "../week-8/new-item";
import itemData from "./items.json";
import ItemList from "./item-list";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemData);

    const handleAddItem = (item) => { 
        setItems([...items, item]);
    }

    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id)); 
    }

    return (
        <main>
            <h1 className="m-2 text-4xl font-bold ">Shopping List</h1>
            <div>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onDeleteItem={handleDeleteItem} />
            </div>
        </main>
    );

}