"use client";

import { useState } from "react";

//Use the useState hook to create a state variable called quantity and a setter function called setQuantity.

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
   
    return (
        <div className="flex flex-col grow justify-center items-center bg-blue-1000 pt-6">
            <Increment setQuantity={setQuantity} />
            <span className= "py-1">{quantity}</span>
            <Decrement setQuantity={setQuantity} />
        </div>
    );

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
}