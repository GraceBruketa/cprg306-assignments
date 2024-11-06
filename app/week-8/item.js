export default function Item({ id, name, category, quantity, onDeleteItem }) {
    return(
        <div>
            <li className="m-2 p-2 bg-gray-700 w-80 text-center rounded">
                <ul>
                    <h2 className="text-blue-500 capitalize">{name}</h2>
                    <h2 className="text-blue-300">Buy {quantity} In {category}</h2>
                </ul>
            </li>
            <button onClick={() => onDeleteItem(id)} className="flex-auto w-32 p-2 m-2 bg-red-500 text-white rounded-lg">Delete</button>
        </div>

    );
}