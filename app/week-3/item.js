import React from 'react';
export default function Item (props) {
    return (    
        <ul className= "flex flex-col justify-center p-2 bg-blue-950 shadow-md my-4 mx-4">
            <div>
                <li className= "text-lg font-semibold text--300">{props.name} </li>
            </div>
            <ul className="flex items-center space-x-1">
                <li>Buy {props.quantity}</li>
                <li>in {props.category}</li>
            </ul>
        </ul>
    )
}



