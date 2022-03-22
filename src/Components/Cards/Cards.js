import Button from '@mui/material/Button';
import "./Card.css"

export default function Card(props){
    console.log("Precio: ", props.precio);
    console.log("Talle: ", props.talle);
    console.log("Title ", props.title);
return(
    <div className="card">
        <h2>{props.title}</h2>
        <p>Talle :{props.talle}</p>
        <p>Precio: ${props.precio}</p>
        <Button variant="outlined"> Comprar </Button>
    </div>
)
}
