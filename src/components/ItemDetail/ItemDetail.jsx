import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({product}) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }
    return (
        <article className="card">
            <div className="card-img">
                <img src={product.img} alt={product.nombre}/>
            </div>
            <div className="card-description">
              <h3 className="card-title">{product.nombre}</h3>
              <p>Stock:{product.stock}</p>
              <p>Precio:${product.precio}</p>
              <p>Categoria:{product.categoria}</p>
              <p>Descripcion:{product.descripcion}</p> 

              </div>
            
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>    
            
        </article>        
    );
    
};

export default ItemDetail;
