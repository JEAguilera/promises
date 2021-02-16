import React from 'react'

const Card = ({producto,precio,calidad, children })=>{
    return(
    <div>
        Felicitaciones! Este es un producto de Seguridad
        <p>Producto: {producto}</p>
        <p>Precio: {precio}</p>
        <p>Calidad: {calidad}</p>
    </div>
    );

};

export default Card;