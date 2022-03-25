import Card from "../Cards/Cards"


const ListProducts= (data) => {
    let dataProduct ={
        title: " Remera ",
        talle: " XL ",
        price: 1000
    }
    return(

        <div className="container-cards">
            <h2>PRODUCTOS EN OFERTA</h2>
            <Card data ={dataProduct}></Card>
            


        </div>
    )
}
export default  ListProducts;
