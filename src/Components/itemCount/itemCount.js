import React,{useState} from "react";
import Button from '@mui/material/Button';


const ItemCount = () => {
    const[count, setCount] = useState(1)
    const [stock, setStock] = useState(5)
    const [sinStock, setSinStock] = useState(1)

    const remove = () =>{
    setCount(count - 1)
        
    }
    const onAdd = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
  
       
    return(
        <>
            <button variant="contained" onClick={remove} >-</button>
            <p>{count}</p>
            <button variant="contained" onClick={onAdd}>+</button>
        </>
    )
}


export default ItemCount;