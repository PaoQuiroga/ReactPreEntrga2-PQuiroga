import React, {useState,useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore,doc,getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    
    const [products, setProduct] = useState([])    
    const {idProduct} = useParams()

    useEffect(()=>{
        const db = getFirestore()

        const nuevoDoc = doc(db,"products",idProduct)
        getDoc(nuevoDoc)
        .then(res =>{
            const data = res.data();
            const nuevoProducto = {id: res.id,...data}
            setProduct(nuevoProducto)
        })
        .catch(error => console.log(error))

    },[idProduct])

    return (
        <div>
    {
        products ? <ItemDetail product={products}/> : <p>CARGANDO...</p>

        }

        </div>
    );
    
};

export default ItemDetailContainer