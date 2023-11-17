import React from "react";

const ItemDetail = ({product}) => {
    return (
        <article>
             <img src={product.img} alt={product.nombre}/>
             <h2>{product.nombre}</h2>
             <p>Stock:{product.stock}</p>
             <p>Precio:{product.precio}</p>
             <p>Categoria:{product.categoria}</p>
             <p>Descripcion:{product.descripcion}</p>            
        </article>
        
    );
};

export default ItemDetail;