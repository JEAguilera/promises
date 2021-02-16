import React, {useState} from 'react';

const ItemCount = ( { initial, stock }) =>  {

    const[contador,setContador] = useState(initial);
    
    const onAdd = () =>{
    if (contador < stock){    
        setContador (contador+1)
    
    }}
    
    
    const onSubtract =() =>{
    if(contador > initial){
        setContador (contador-1)
    }}
    
    
    return(
        <>
            <button  onClick={ onSubtract} > - </button>
            <span > {contador} </span>
            <button  onClick={ onAdd} > + </button>
        </>
    );
    
    }

    export default ItemCount;
    
    