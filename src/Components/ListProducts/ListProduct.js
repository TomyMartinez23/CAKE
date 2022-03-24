import Card from "../Cards/Cards"

export default function ListProducts(props){
    return(

        <div className="container-cards">
            <h2>{props.title}</h2>
            <Card title= "Remera" talle=" XL" precio={500}></Card>
            <Card title= "Pantalon" talle=" 42" precio={400}></Card>
            <Card title= "Zapatillas" talle=" 43" precio={800}></Card>
            <Card title= "Zapatillas" talle=" 43" precio={800}></Card>


        </div>
    )
}
