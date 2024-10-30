"use client";

import { useState } from "react";

//Use the useState hook to create a state variable called quantity and a setter function called setQuantity.

export function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const nameField = (event) => {
        let name = event.target.value;
        name = name.replace(/[^a-zA-Z\s]/g, "");
        setName(name);
      };
    
    const categoryField = (event) => {
        let category = event.target.value;
        category = category.replace(/[^a-zA-Z\s]/g, "");
        setCategory(category);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { quantity, name, category };
        console.log(item); // eventually save to a database
    
        // reset form
        setQuantity(1);
        setName("");
        setCategory("Produce");
      };

function Increment() {
    const increment = () => setQuantity(quantity + 1);
    console.log(quantity);
    return (
        <div>
            <button onClick={increment} className="flex-auto w-32 p-2 m-2 bg-blue-500 text-white rounded-lg"
                    disabled={quantity >=20}>+</button>
        </div>
    );
    }
    
    function Decrement() {
        const decrement = () => setQuantity(quantity - 1);
        console.log(quantity);
        return (
            <div>
                <button onClick={decrement}className="flex-auto w-32 p-2 m-2 bg-blue-500 text-white font-bold rounded-lg"
                    disabled={quantity <= 1}>-</button>
            </div>
        );
    }
   
    return (
        <form onSubmit={handleSubmit}className="flex-auto bg-slate-600 rounded w-80 items-center m-2">
            <div>
                <label htmlFor="name" className="text-2xl text-center text-slate-200 items-center m-2">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => nameField(event)}
                    className="border border-black m-2 text-black"
                />
             </div>
            <div>
            <div>
                <label htmlFor="category" className="text-2xl text-center text-slate-200 items-center m-2">Category:</label>
                <select value= {category} onChange={(event) => categoryField(event)} className="border border-black m-2 text-black">
                    <option>Produce</option>
                    <option>Dairy</option>
                    <option>Bakery</option>
                    <option>Meat</option>
                    <option>Frozen Foods</option>
                    <option>Snacks</option>
                    <option>Canned Goods</option>
                    <option>Beverages</option>
                    <option>Household</option>
                    <option>Other</option>
                </select>
            </div>
                <div className="flex flex-row items-center"> <label className="text-2xl text-center w-10">{quantity}</label>
                    <div><Increment/></div>
                    <div><Decrement/></div>
                </div>
            </div>
            <button type="submit" className=" text-lg bg-slate-500 hover:bg-slate-300 rounded w-16 items-center m-2">Submit</button>
        </form>
    );
}
export default NewItem;