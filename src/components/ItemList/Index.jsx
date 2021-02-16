import React, {useState} from 'react';
import Item from '../Item/Index.jsx';

const ItemList = ({products}) => {
    return(
        <div>
             {products.map((product) =>{
                  return <Item key ={product.id} product ={product}/> ;
              })}
        </div>
        
    )
}

export default ItemList;
