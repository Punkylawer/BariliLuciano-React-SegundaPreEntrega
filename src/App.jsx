import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import './App.css';
import ItemCounter from './components/ItemCounter/ItemCounter';


/* Crear los siguientes componentes: ItemListContainer, CartWidget, NavBar */
  
function App() {
  return (
    <>
        <div className='app'>   
          <NavBar />
          <ItemListContainer saludo={'Bienvenidos y Buenas Olas :)'}/>
          <ItemCounter stock={20} />
          
      </div>
    </>
  )    
}

export default App
