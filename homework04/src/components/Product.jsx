import { useParams } from "react-router-dom";

export const Products = [
    {
        id: 1,
        name: "Short",
        price: 100,
        size: "S",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae labore dolore inventore, quia laudantium totam nesciunt asperiores aliquid! Iste, odit autem? Hic reprehenderit vero quis, assumenda maxime quod perferendis minima.",
    },
    {
        id: 2,
        name: "T-Short",
        price: 120,
        size: "L",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae labore dolore inventore, quia laudantium totam nesciunt asperiores aliquid! Iste, odit autem? Hic reprehenderit vero quis, assumenda maxime quod perferendis minima.",
    },
    {
        id: 3,
        name: "Short",
        price: 150,
        size: "XL",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae labore dolore inventore, quia laudantium totam nesciunt asperiores aliquid! Iste, odit autem? Hic reprehenderit vero quis, assumenda maxime quod perferendis minima.",
    },
    {
        id: 4,
        name: "Pants",
        price: 80,
        size: "M",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae labore dolore inventore, quia laudantium totam nesciunt asperiores aliquid! Iste, odit autem? Hic reprehenderit vero quis, assumenda maxime quod perferendis minima.",
    },
    {
        id: 5,
        name: "Jeans",
        price: 300,
        size: "L",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae labore dolore inventore, quia laudantium totam nesciunt asperiores aliquid! Iste, odit autem? Hic reprehenderit vero quis, assumenda maxime quod perferendis minima.",
    },
    {
        id: 6,
        name: "Coat",
        price: 800,
        size: "M",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae labore dolore inventore, quia laudantium totam nesciunt asperiores aliquid! Iste, odit autem? Hic reprehenderit vero quis, assumenda maxime quod perferendis minima.",
    },
];

const ProductDetails = () => {
    const { productID } = useParams();
    const product = Products.filter((product) => product.id == productID)[0];
    if (product) {
        return (
            <>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Size: {product.size}</p>
            </>
        );
    }
    return <h1>ERROR 404: Товар с идентификационным номером {productID} не найден!</h1>;
};

export default ProductDetails;
