import React,{useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({product}) => {

    const [quantity,setQuantity] = useState(0)

    const {addToCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addToCart(product,cantidad)
       
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
              {quantity
              == 0?
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>  
              :
              <Link to={"/Cart"}>Ir al Carrito</Link> 
              }
              </div>            
            
        </article>        
    );
    
};

export default ItemDetail;
