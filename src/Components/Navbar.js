import React from "react"
import Button from '@mui/material/Button';
import logo from "./imgProyecto/logo.png"


function Navbar(props) {
    return(
        <header className='main-header'>
        <img src= {logo} className='Container-logo'/>
        <ul className='navbar'>
          <li><Button variant="contained">Inicio</Button></li>
          <li><Button variant="contained">Productos</Button></li>
          <li><Button variant="contained">Nosotros</Button></li>
          <li><Button variant="contained">Contacto</Button></li>
        </ul>
      </header>
    )
}

export default Navbar;



