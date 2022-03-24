import React from "react"
import Button from '@mui/material/Button';
import "./Navbar.css"
import CartWidget from "../CartWidget";
import logo from "../imgProyecto/Logo2.jpg"


function Navbar(props) {
    return(
        <header className='main-header'>
        <img src={logo}  className='logo'/>
        <ul className='navbar'>
          <li><Button variant="contained">Inicio</Button></li>
          <li><Button variant="contained">Productos</Button></li>
          <li><Button variant="contained">Nosotros</Button></li>
          <li><Button variant="contained">Contacto</Button></li>
          <CartWidget></CartWidget>
        </ul>
       
      </header>
    )
}

export default Navbar;



