"use client";

import { useState } from "react";

//Use the useState hook to create a state variable called quantity and a setter function called setQuantity.

export default function NewItem() {
    const [quantity, setQuantity] = useState(0);
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
           <button onClick={increment} className="bg-blue-500 font-bold hover:bg-blue-700 rounded w-32"
                disabled={quantity >=20}>+</button>
       </div>
   );
}

function Decrement() {
    const decrement = () => setQuantity(quantity - 1);
    console.log(quantity);
    return (
        <div>
            <button onClick={decrement} className="bg-blue-500 font-bold hover:bg-blue-700 rounded w-32"
                disabled={quantity <= 1}>-</button>
        </div>
    );
}
return (
  <main className="m-2 ">
    <h1 className="text-2xl">New Item</h1>
      <form className="m-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => nameField(event)}
            className="border border-black m-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-black m-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
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
        <button type="submit">Submit</button>
      </form>
  </main>
  );
}

// export default function NewItem() {