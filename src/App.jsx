import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Error from './components/Error/Error';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import { useEffect, useState } from 'react';

function App() {

  return (
     <>
      { <BrowserRouter>

        <CartProvider>

         <NavBar/>

          <Routes>
            <Route path= '/' element={<ItemListContainer/>}/>
            <Route path= '/:categoryId' element={<ItemListContainer/>}/>
            <Route path= '/item/:idProduct' element={<ItemDetailContainer/>}/>
            <Route path= '/Cart' element={<Cart/>}/>
            <Route path= '/Checkout' element={<Checkout/>}></Route>
            <Route path= '#' element={<Error/>}/>
          </Routes>

        </CartProvider>
       
       </BrowserRouter>}  
   </> 
       
  );
};

export default App;
