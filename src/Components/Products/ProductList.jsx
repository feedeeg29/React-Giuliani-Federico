import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
    return (
        <>
            {products.map(p => (
                <Product
                    key={p.id}
                    nombre={p.name}
                    precio={p.price}
                    imagen={p.image}
                    stock={p.stock} />
            ))}
        </>
    );
}