import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Card from './components/Card';
//import ItemListContainer from './components/contadorAlerta';
import ItemCount from './components/ItemCount';
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/'

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
       <h1> Higiene y Seguridad: Elementos de Proteccion Personal </h1>
      <div>

   
       
      <br></br>
        <Card className='cards' producto='Casco Electricista' precio='$5000' calidad='Electricidad'/>
        

        <ItemCount  initial = {1} stock = {10} /> 

        <br></br> 

        <ItemListContainer greeting ={'Probando consola'}/>


            
      </div>     

       
    </div>

    



  );
}

export default App;
