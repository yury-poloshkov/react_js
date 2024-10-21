import { Link } from "react-router-dom";
import { Products } from "./Product";

const CataloguePage = () => {
    const products = Products.map((product) => (
        <article style={{ border: "1px solid black", margin: "8px", padding: "8px" }}>
            <Link to={`/catalogue/${product.id}`}>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
            </Link>
        </article>
    ));
    return (
        <>
            <h1>Каталог продукции</h1>
            <section style={{ display: "flex" }}>{products}</section>
        </>
    );
};

export default CataloguePage;
