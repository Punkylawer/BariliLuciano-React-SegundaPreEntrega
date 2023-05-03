import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import './App.css';


/* Crear los siguientes componentes: ItemListContainer, CartWidget, NavBar */
  
function App() {
  return (
    <>
        <div className='app'>   
          <NavBar />
          <ItemListContainer saludo={'Bienvenidos y Buenas Olas :)'}/>
          <div></div>
      </div>
    </>
  )    
}

export default App
