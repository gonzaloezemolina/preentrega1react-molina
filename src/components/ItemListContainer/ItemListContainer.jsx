import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../../asynmock";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
    },[idCategoria])

    return(
        <>
            <h2 className="tituloProductos">Nuestra variedad de productos</h2>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer