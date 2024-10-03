"use client";

import { useState } from "react";

//Use the useState hook to create a state variable called quantity and a setter function called setQuantity.

export default function NewItem() {
    const [quantity, setQuantity] = useState(0);
   
    return (
        <div>
            <Decrement setQuantity={setQuantity} />
            <span>{quantity}</span>
            <Increment setQuantity={setQuantity} />
        </div>
    );

function Increment() {
   const increment = () => setQuantity(quantity + 1);
   console.log(quantity);
   return (
       <div>
           <button onClick={increment} 
                disabled={quantity >=20}>+</button>
       </div>
   );
}

function Decrement() {
    const decrement = () => setQuantity(quantity - 1);
    console.log(quantity);
    return (
        <div>
            <button onClick={decrement}
                disabled={quantity <= 1}>-</button>
        </div>
    );
}
}