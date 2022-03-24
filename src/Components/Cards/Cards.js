import Button from '@mui/material/Button';
import "./Card.css"

export default function Card(props){
   
return(
    <div className="card">
        <h2>{props.title}</h2>
        <p>Talle :{props.talle}</p>
        <p>Precio: ${props.precio}</p>
        <Button variant="outlined"> Comprar </Button>
    </div>
)
}
