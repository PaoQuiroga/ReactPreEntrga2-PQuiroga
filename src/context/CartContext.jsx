import React, {createContext,useState} from "react";
export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0)
    const [cantidadTotal,setCantidadTotal] = useState(0)

    const addToCart = (product,cantidad) => {
        const productoExistente = cart.find(prod => prod.product.id == prod.product.id)
        if(!productoExistente) {
            setCart(prev => [...prev,{product,cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (product.precio * cantidad))
        }else{
            const carritoRender = cart.map(prod => {
                if(prod.product.id === prod.product.id){
                    return {...prod,cantidad: prod.cantidad+cantidad}
                }else{
                    return prod;
                }
            })

            setCart(carritoRender);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (product.precio * cantidad))
        }
    }

    const removeItem = (id) => {
        const productoEliminado = cart.find(prod => prod.product.id == id)
        const carritoRender = cart.filter(prod => prod.product.id !==id)
        setCart(carritoRender);
        setCantidadTotal(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - productoEliminado.product.precio *productoEliminado.cantidad)
    }

    const clearCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0)
    }

    return(
        <CartContext.Provider value={
            {
                cart,
                total,
                cantidadTotal,
                addToCart,
                removeItem,
                clearCart
            }
        }>
        {children}

        </CartContext.Provider>
    )
}



