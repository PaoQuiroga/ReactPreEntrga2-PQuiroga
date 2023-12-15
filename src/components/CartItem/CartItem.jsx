import React from "react";

const CartItem = ({cartItem,removeItem}) => {
    return (
        <div key={cartItem.product.id}>
             <img src={cartItem.product.img} alt={cartItem.product.nombre}/>
             <h3>{cartItem.product.nombre}</h3>
             <p>{cartItem.product.stock}</p>
             <p>${cartItem.product.precio}</p>
             <p>{cartItem.product.descripcion}</p> 
             <p>{cartItem.cantidad}</p> 
             <p>${cartItem.cantidad*cartItem.product.precio}</p> 
            <button onClick={()=>{removeItem(cartItem.product.id)}}>Eliminar Producto</button>
        </div>
    );
};

export default CartItem;
