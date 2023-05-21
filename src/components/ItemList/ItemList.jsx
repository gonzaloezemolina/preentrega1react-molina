import React from 'react'
import Products from '../Products/Products'

const ItemList = ({productos}) => {
  return (
    <div className='containerProductos'>
        {productos.map(producto => <Products key={producto.id} {...producto} />)}
    </div>
  )
}

export default ItemList