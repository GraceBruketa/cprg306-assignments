import ItemList from "./item-list.js";  

export default function Page() {
    return (
        <main>
            <h1 className="text-4xl font-bold text-blue-300 ">Shopping List</h1>
            <section className="flex justify-between items-center">
                <ItemList />
            </section>
        </main>
    )
}