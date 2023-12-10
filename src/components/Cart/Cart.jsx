import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
    const {cart,total,clearCart,removeItem} = useContext(CartContext);
    console.log(cart)
    
    return (
        <div>
            <h2>CARRITO</h2>
          
          {
           cart.length == 0 ?
            <div>
                <h2>No hay productos en el Carrito</h2>
                <Link to={"/"}>Volver al Inicio</Link>
            </div>
            :
            <div className="carrito">
                {
                 cart.map((p) => (
                    <CartItem key={p.product.id} cartItem={p} removeItem={removeItem}/>
                    ))
                }
                <h2>Total Carrito: ${total}</h2>
                <button onClick={()=>{clearCart()}}>Vaciar Carrito</button>
                <Link to={"/Checkout"}>Finalizar Compra</Link>
            </div>
          }

        </div> 
    );
};

export default Cart;