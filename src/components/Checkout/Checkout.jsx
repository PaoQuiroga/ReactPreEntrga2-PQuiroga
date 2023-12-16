import React,{useState,useContext} from "react";
import { collection,addDoc,updateDoc,doc,getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [emailConfirmacion,setEmailConfirmacion] = useState("");
    const [error,setError] = useState("");
    const [ordenId,setOrdenId] = useState("")

    const {cart,total,clearCart} = useContext(CartContext)
    const manejadorFormulario = (event) =>{
        event.preventDefault();
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar los datos requeridos");
            return;
        }
        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden, intente nuevamente");
            return;
        }
        const db = getFirestore()
        const orden = {
            items: cart.map((product)=> ({
                id: product.product.id,
                nombre: product.product.nombre,
                cantidad: product.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
    }
    Promise.all(
        orden.items.map(async (productOrden)=>{
            const productRef = doc(db,"products",productOrden.id);
            const productDoc = await getDoc(productRef);
            const stockActual = productDoc.data().stock;

            await updateDoc(productRef,{
                stock: stockActual - productOrden.cantidad,
            });
        })
    )
    .then(() =>{
        addDoc(collection(db,"ordenes"), orden)
        .then((docRef) =>{
            setOrdenId(docRef.id);
            clearCart();
        })
        .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden");
        })
    })
        .catch((error) => {
            console.log("No se pudo actualizar el stock", error)
            setError("No se puede actualizar el stock, inténtelo nuevamente");
    });
}
    return (
        <div>
            <h2>Ingresa tus Datos</h2>
            
             <form onSubmit={manejadorFormulario} className="formulario">

                {cart.map((product) => (
                    <div key={product.product.id}>
                        <p>
                            {" "}
                            {product.product.nombre} x {product.cantidad}{" "}</p>
                        <p>${product.product.precio}</p>
                        
                        <hr />  
                    </div>   
                ))}

            <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input type="name" onChange={(e)=> setNombre(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="">Telefono</label>
                <input type="number" onChange={(e)=> setTelefono(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="">Email Confirmacion</label>
                <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
            </div>

            {error && <p style={{color: "red"}}>{error}</p>}

            <button type= 'submit'>Comprar</button>

            {
                ordenId && (
                    <strong className="ordenId">
                        <p>Gracias por su Compra!! Tu Número de Orden es: {ordenId}{" "}</p> 
                    </strong>    
                )}
          </form>
        </div>
    );
};

export default Checkout;