//Array de productos
const productos = [
    {
        id: "Proteina 1",
        titulo: "Proteina SPX",
        imagen: "/src/assets/SPX400X500ssss.webp",
        precio: 4899,
        idCat:"suplementos"
    },
    {
        id: "Creatina 1",
        titulo: "Creatina Ultratech",
        imagen: "../src/assets/creaultratechiseno-sin-titulo-551-ac00f32a85bf7388ee16222443092590-640-0.webp",
        precio: 6299,
        idCat:"suplementos"
    },
    {
        id: "Creatina 2",
        titulo: "Creatina Growth",
        imagen: "../src/assets/creagrowthd_980582-mla48924358352_012022-o-a501d946054e728f7316578969011246-640-0.webp",
        precio: 4699,
        idCat:"suplementos"
    },
    {
        id: "Preworkout 1",
        titulo: "Preworkout Nutrend",
        imagen: "../src/assets/prewnutrendn1_510g_blueraspberry-2022.jpg",
        precio: 3790,
        idCat:"suplementos"
    },
    {
        id: "Preworkout 2",
        titulo: "Preworkout Star",
        imagen: "../src/assets/preworkoutstartD_NQ_NP_826798-MLA42642002810_072020-V.jpg",
        precio: 4190,
        idCat:"suplementos"
    },
    {
        id: "Mass Gainer 1",
        titulo: "Mass gainer SPX",
        imagen: "../src/assets/gainer.jpg",
        precio: 4050,
        idCat:"suplementos"
    },
    {
        id: "Straps 1 ",
        titulo: "Straps Balboa",
        imagen: "../src/assets/straps1_800.jpg",
        precio: 4199,
        idCat:"acessorios"
    },
    {
        id: "Cinturon 1",
        titulo: "Cinturon de cuero Balboa",
        imagen: "../src/assets/cintobalboaD_NQ_NP_978144-MLA31115213308_062019-O.webp",
        precio: 31200,
        idCat:"accesorios"
    },
    {
        id: "Guantes 1",
        titulo: "Guantes ExtremeProyect",
        imagen: "../src/assets/guantes-gym-fitness-extreme-proyec.jpg",
        precio: 1290,
        idCat:"acessorios"
    },
    {
        id: "Rodilleras 1",
        titulo: "Rodilleras Balboa",
        imagen: "../src/assets/rodillerasbalboa.jpg",
        precio: 11450,
        idCat:"acessorios"
    }
]


export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(productos)
        },2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(product => product.id === id);
            resolve(producto);
        }, 2000)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = productos.filter(producto => producto.idCat === idCategoria)
            resolve(productosCategoria)
        },2000)
    })
}