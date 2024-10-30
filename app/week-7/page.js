"use client"; 

import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import itemsData from "./items.json";

import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }
    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));  
    };

    return (
        <main>
            <h1 className="text-4xl font-bold text-slate-300 ">Shopping List</h1>
                <NewItem items={items} onAddItem={handleAddItem} />
            <section className="flex justify-between items-center">
                <ItemList items={items} onAddItem={handleDeleteItem}/>
            </section>
        </main>
    )

}
