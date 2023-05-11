/* Imports. */

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemCount from './components/ItemCount/ItemCount';


/* Función App */

function App() {
  return (
    <>
        <div className='app'>   
          <NavBar />
          <ItemListContainer saludo={'Bienvenidos y Buenas Olas :)'}/>
          <ItemCount stock={20} onAdd={(count) => console.log('La cantidad agregada al carrito es : ',count) }/>
        
          
      </div>
    </>
  )    
}

export default App
