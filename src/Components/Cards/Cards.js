import Button from '@mui/material/Button';
import React,{useState} from"react"
import "./Card.css"
import ItemCount from '../itemCount/itemCount';

export default function Card({data}){
   const {title, price, talle, stock} = data
   const [ count, setCount ]= useState(5)
  
    console.log("estado contador: ", count)
   
return(
    <div className="card">
        <h2>{title}</h2>
        <p>Talle :{talle}</p>
        <p>Precio: ${price}</p>
        <p>Stock: {count}</p>
        <ItemCount stock={stock}></ItemCount>
      
    </div>
)
}
