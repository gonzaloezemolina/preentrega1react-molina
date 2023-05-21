import './Products.css'
import { Link } from 'react-router-dom'

const Products = ({ id, titulo, precio, imagen }) => {

  return (

    <div className='producto'>
      <img className='producto__img' src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <h3>${precio}</h3>
      <Link to={`/Products/${id}`} className='producto__detalles__btn'> Ver más </Link>
    </div>

  )
}


export default Products