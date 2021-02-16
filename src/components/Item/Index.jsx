import React from 'react';

const Item =({product})=> {
    return (
    <div>
        <h3>{product.name}</h3>
        <p>Precio: {product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Categoria: {product.category}</p>
    </div>
    );

}
export default Item;