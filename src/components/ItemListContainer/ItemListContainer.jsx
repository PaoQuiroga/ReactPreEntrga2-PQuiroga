import React, {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    
    const [products,setProducts] =useState([]);

    useEffect(()=>{

        const fetchData = () => {
            return fetch("/data/products.json")
            .then((response) => response.json())
            .then((data)=>{
                setProducts(data)
            })

            .catch((error)=>console.log(error))
        }

        fetchData()

    },[])
    
    return (
        <>
           {products.length == 0 
           ?
           <h3>CARGANDO...</h3>
           :
           <ItemList products={products}/>}

        </>
    );

}; 

export default ItemListContainer