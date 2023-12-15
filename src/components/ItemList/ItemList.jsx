import React from "react";
import Item from '../Item/Item';

const ItemList = ({products}) => {
    return (

        <>
            {products.map((products)=>(
                <Item
                key={products.id}
                product={products}/>

            ))}
        </>
    );
};

export default ItemList;