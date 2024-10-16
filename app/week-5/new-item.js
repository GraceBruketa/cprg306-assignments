"use client";

import { useState } from "react";

//Use the useState hook to create a state variable called quantity and a setter function called setQuantity.

export default function NewItem() {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter item category"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

// export default function NewItem() {