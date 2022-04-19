import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App () {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;