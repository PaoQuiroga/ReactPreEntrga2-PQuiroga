import React, {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    
    const [products,setProducts] =useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{

        const fetchData = () => {
            return fetch("/data/products.json")
            .then((response) => response.json())
            .then((data)=>{
                if(categoryId){
                    const filterProducts = data.filter(p=>p.categoria == categoryId)
                    setProducts(filterProducts)
                }else{
                    setProducts(data)
                }  
            })

            .catch((error)=>console.log(error))
        }

        fetchData()

    },[categoryId])

    return (
        <>
           {products.length == 0 
           ?
           <h2>CARGANDO...</h2>
           :
           <ItemList products={products}/>}

        </>
    );

}; 

export default ItemListContainer