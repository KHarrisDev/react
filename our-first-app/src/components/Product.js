import ItemDescription from './ItemDescription';
import styles from './Product.module.css';
// CSS Modules uses dot notation when declaring CSS classes to avoid conflicting styles in components. See below

// The following code is an example of passing props "down" to another component without destructuring the props.
function Product(props) {
    return (
        <div className={styles.product}>
            <ItemDescription name={props.name} description={props.description}/>
            <h1>There was an error.</h1>
            <h3>{props.price}</h3>
        </div>
    );
}

export default Product;