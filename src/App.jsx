import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  
  return (
    <>
    <NavBar/>
    <div className='greeting'>
    <ItemListContainer greeting={"Bienvenido a nuestra tienda online!"}/>
    </div>
    </>
  )
}

export default App
