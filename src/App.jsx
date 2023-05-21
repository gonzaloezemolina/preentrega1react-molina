import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import Counter from './components/Try/Try'
import Banner from './components/Banner/Banner'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={ItemListContainer} />
          <Route path='/categoria/:idCategoria' element={ItemListContainer} />
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
        </BrowserRouter>
          <Banner />
          {/* <Counter /> */}
          {/* <Products /> */}
          <Footer />
      </>
      )
}

      export default App


