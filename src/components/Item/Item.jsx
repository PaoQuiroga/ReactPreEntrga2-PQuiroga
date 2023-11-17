import React from "react";
import ItemCount from '../ItemCount/ItemCount'

const Item = ({product}) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }
    return (
        <>
        <article className="contenedor">
            <img src={product.img} alt="" />
            <h2>{product.nombre}</h2>
        </article>

        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
        </>
        
        
    );
};

export default Item;