import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link } from 'react-router-dom';

    const NavBar = () => {
  
    const enlaces = [
      "Muebles",
      "Iluminaria",
      "Sillas",
    ]
    return (   
        <nav>          
            <ul>
                {enlaces.map((e,id) =>
                    <li key={id}>
                       <Link to={`${e}`}>
                         {e}
                       </Link>
                    </li>
                )}

             <Link to={"/"}>
                <h1 className="titulo">Tu Mundo Decorado</h1> 
             </Link>
              
            </ul>    

            <CartWidget/>
            
        </nav>      
    );

};

export default NavBar;

