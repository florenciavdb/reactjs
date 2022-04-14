import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App () {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route extact path="/" element={<ItemListContainer />}/>
        <Route extact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route extact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;