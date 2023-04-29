import React from "react";

const CartWidget = () => {
    const imgCarrito = "../src/assets/kartbg.png"
    return(
        
        <div>
            <img className="carritoNav" src={imgCarrito} alt="Carrito de compras" />
            <p>10</p>
        </div>
    )
}

export default CartWidget