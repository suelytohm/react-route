import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Product = () => {

    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url);

    console.log(product);
    return (
        <>
            {error && <p>Ocorreu um erro</p>}
            {loading && <p>Carregando...</p>}

            {product && (
                <div>
                    <h3>{product.name}</h3>
                    <p>R${product.price}</p>
                </div>
            )}
        </>
    )
}

export default Product
