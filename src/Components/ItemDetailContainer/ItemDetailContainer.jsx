import React, { useEffect, useState } from "react";
import { Productis } from "../CustomJS/ProductsArray";
import ItemDetail from "./ItemDetail/Productis";



const ItemDetailContainer = () => {
    const [products, setProductis] = useState([]);

    useEffect(() => {
        Productis().then((res) => {
            setProductis(res);
        });
    }, []);

    return (
        <>
            <h1>Desafio Seis : Detalle de Producto</h1>
            <ItemDetail {...products} />
        </>
    )
};
export default ItemDetailContainer;
