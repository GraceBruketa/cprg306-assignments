
export default function Item ({id, name, category, quantity}) {
    return(
        <div>
            <li className="m-2 p-2 bg-gray-700 w-80 text-center">
                <ul>
                    <h2 className="text-green-500 capitalize">{name}</h2>
                    <h2 className="text-blue-300">{quantity} {category}</h2>
                </ul>
                <button onClick={() => handleDeleteItem(id)} className="flex-auto w-32 p-2 m-2 bg-red-500 text-white rounded-lg">Delete</button>
            </li>
        </div>
    );
}

