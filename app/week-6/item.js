
export default function Item (props) {
    return (    
        <ul>
            <div>
                <li>{props.name} </li>
            </div>
            <ul>
                <li>Buy {props.quantity}</li>
                <li>in {props.category}</li>
            </ul>
        </ul>
    )
}

