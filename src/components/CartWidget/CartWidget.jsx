import React, { useContext} from "react";
import carrito from "../../assets/icon/carrito.jpg"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext)

    return (
        <div>
            <Link to="/Cart">
             {<img src={carrito} alt="carrito" />}
            </Link>
            <p className="contador">{cantidadTotal}</p>
        </div>
    )
}

export default CartWidget;