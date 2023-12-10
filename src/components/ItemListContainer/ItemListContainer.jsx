import React, {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore"

const ItemListContainer = () => {
    
    const [products,setProducts] =useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{
        setLoading(true);

        const db = getFirestore()

        const misProducts = categoryId
        ? query(collection(db,"products"),where("categoria","==",categoryId))
        : collection(db,"products")

        getDocs(misProducts)
        .then((res)=>{

            const nuevosProducts = res.docs.map((doc)=>{
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProducts(nuevosProducts)
        })
        .catch((error) => console.log(error))
        .finally(()=>{
            setLoading(false)
        })

    },[categoryId])

    return (
        <>
          {loading ? (
            <h2>CARGANDO...</h2>
          ) : (
            <ItemList products={products}/>
          )}
        </>
    );
}; 

export default ItemListContainer