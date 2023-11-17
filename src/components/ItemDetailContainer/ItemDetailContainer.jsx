import React, {useState,useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({productId}) => {
    
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        const fetchData = () => {
            return fetch("/data/products.json")
            .them((response)=>response.json)
            .them((data)=>{
                const foundProduct = data.find((item)=> item.id == productId)
                setProduct(foundProduct)
            })
            .catch((error)=>console.log(error))
        }

        fetchData()
    },[productId])

    return (
        <div>
    {
        product ? <ItemDetail producto={product}/> : <p>CARGANDO...</p>

        }
    
        </div>
    );
    
};

export default ItemDetailContainer