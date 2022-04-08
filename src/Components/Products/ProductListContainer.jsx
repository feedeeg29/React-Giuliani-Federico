import React, { useEffect, useState } from "react";
import customFetch from "../CustomJS/PrivateFetch";
import ProductList from "./ProductList";
import ProductsArray from "../CustomJS/ProductsArray";
export default function ProductListContainer() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        customFetch(3000, ProductsArray)
            .then(res => setProducts(res))
            .catch(err => console.log(err));
    }, [products])
    return (

        <div>
            <ProductList products={products} />
        </div>
    );
}