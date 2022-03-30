import { useState, useEffect } from "react"
import Card from "../Cards/Cards"


const ListProducts = ({}) => {
    const mockProductos = [{
        id: 1,
        title: " Chocotorta",
        price: 1000,
        image: "Chocotorta.jpg"
    },
    {
        id: 2,
        title: " Torta Oreo",
        price: 1200,
        image: "tortaoreo.jpg"
    },
    {
        id: 3,
        title: " Lemon pie",
        price: 700,
        image: "lemon.jpg"
    }
]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        getProducts().then( (productos) => {
            setProducts(productos)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])


    
    return(
        <div className="container-cards">
            <h2> Productos en Oferta</h2>
            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default  ListProducts;

