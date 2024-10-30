"use client"; 

import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import itemsData from "./items.json";

import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main>
            <h1 className="text-4xl font-bold text-slate-300 ">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
            <section className="flex justify-between items-center">
                <ItemList items={items} onAddItem={handleAddItem}/>
            </section>
        </main>
    )

}
