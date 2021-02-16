import  React, { useState } from 'react';
import  productList from '../../moks/productList.js';
import ItemList from '../ItemList/Index.jsx';

const ItemListContainer = ({greeting})=> {
    const[products,setProducts] = React.useState([]);

    React.useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
        setTimeout(() =>  resolve(productList), 3000);
    }); 
    
    myPromise.then((result) => setProducts(result)); 
    },[]);

    return(
        <div>
            <h2> {greeting}</h2>
            <ItemList products={products}></ItemList>
        </div>
       
    );
    



};

export default ItemListContainer;