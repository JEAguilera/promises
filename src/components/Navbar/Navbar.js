import React, { Component } from 'react';
import './Navbar.css'

const Navbar = () => (
    <header className='navbar'>
       
       <div className='navbar_title navbar_item'><i className="fas fa-hand-holding-medical"></i>  SECURITASK HyS  </div>
       
       <div className='navbar_item'><i class="fas fa-shopping-bag"> </i> Carrito </div>
        
        <div className='navbar_item'> Cabeza</div>
        <div className='navbar_item'> Ojos y Cara </div>
        <div className='navbar_item'> Auditiva</div>
        <div className='navbar_item'> Respiratoria</div>
                              
    </header>
);


export default Navbar