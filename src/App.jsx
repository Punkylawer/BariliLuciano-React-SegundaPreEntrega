/* Imports. */

import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';


/* Función App */

function App() {
  return (
    <>
        <div className='app'>   
        <NavBar />
        <br />
        <br />
        <Carousel />
        <br />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:category' element={<ItemListContainer /> } /> 
          <Route path='/Item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </div>
    </>
  )    
}

export default App
