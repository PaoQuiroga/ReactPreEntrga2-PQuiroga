import React from "react";
import ItemCount from '../ItemCount/ItemCount'

const Item = ({product}) => {

    const onAdd = () => {
        console.log(quantity)
    }
    return (
        <>
        <article className="contenedor">
            <img src="" alt="" />
            <img src={product.img} alt="" />
            <h2>{product.nombre}</h2>
            <p> ${product.precio}</p>
            <h3>{product.stock}</h3>
            <p>{product.descripcion}</p>

        </article>

        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
        </>
        
        
    );
};

export default Item;