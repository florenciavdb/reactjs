import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from "./components/Cart/CartContext";
import Form from './components/Form/Form';

function App () {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/form" element={<Form/>}></Route>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>

      </BrowserRouter>
      </CartContextProvider>
   
    </>
  )
}

export default App;