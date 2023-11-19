import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({product}) => {

    return (
        <>
        <article className="contenedor">
               <img src={product.img} alt={product.nombre} />
            <Link to={`/item/${product.id}`}>
               <h2>{product.nombre}</h2>
            </Link>           
        </article>
       
        </>        
    );
   
};

export default Item;