import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

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
