import React from "react";
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../src/assets/carritoblack.jpg"
    return(
        
        <div>
            <img className="carritoNav" src={imgCarrito} alt="Carrito de compras" />
            <p className="contador">10</p>
        </div>
    )
}

export default CartWidget