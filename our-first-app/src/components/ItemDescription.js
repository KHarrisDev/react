function ItemDescription(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
        </div>
    );
}

export default ItemDescription;