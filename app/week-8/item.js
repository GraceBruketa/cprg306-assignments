export default function Item({ id, name, category, quantity, onDeleteItem, onSelect }) {
    return(
        <section className="m-5 bg-[#0f172a] p-3 w-1/4 cursor-pointer" onClick={() => onSelect({ name, quantity, category })}>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>
                Buy {quantity} in {category}
            </p>
            <button onClick={() => onDeleteItem(id)} className="flex-auto w-32 p-2 m-2 bg-red-500 text-white rounded-lg">Delete</button>
        </section>
    );
}