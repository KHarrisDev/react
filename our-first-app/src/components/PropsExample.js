import Product from "./Product";
import DestructuredProduct from "./DestructuredProduct";

function PropsExample() {
    return (
        <div>
            <h1>Props Example</h1>
            <p>The props start start from the top to bottom.</p>
            <p>This component is the top. The next level down is the product component.</p>
            <p>Properties are added to the Product component. These are "props" that are passed down to the component.</p>
            <p>See the Product component to see how the props are passed.</p>
            <p>Props can be destructured when recieved by the component. See iPhone item for example.</p>
            <Product 
                name="Google Assistant" 
                description="Device that plays audio" 
                price={39.99}
            />
            <DestructuredProduct 
                name="iPhone X" 
                description="A phone developed by Apple" 
                price={799.99} 
            />
            <Product />
            <Product />
        </div>
    );
}

export default PropsExample;