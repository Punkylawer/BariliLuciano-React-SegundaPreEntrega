/* Imports. */

import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import InstaCount from './components/InstaCount/InstaCount';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';


/* Función App */

function App() {
  return (
    <>
        <div className='app'>
        <CartProvider>   
        <NavBar />
        <br />
        <br />
        <Carousel />
        <br />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/' element={<InstaCount />} />
          <Route path='/categoria/:category' element={<ItemListContainer /> } /> 
          <Route path='/Item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/contacto' element={<Contacto /> } /> 
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
        </CartProvider>
      </div>
    </>
  )    
}

export default App
