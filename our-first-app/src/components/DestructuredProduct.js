import ItemDescription from "./ItemDescription";

function DestructuredProduct({ name, description, price }) {
    // Instead of passing props, we destructure the props object
    // This allows us to call props without notating "props"
    return(
        <div>
            <ItemDescription 
                name={name} 
                description={description} 
            />
            {/* <h1>{name}</h1>
            <h2>{description}</h2> */}
            <h3>{price}</h3>
        </div>
    );
}

export default DestructuredProduct;