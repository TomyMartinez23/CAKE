import React from "react"
import Button from '@mui/material/Button';


function Navbar() {
    return(
        <header className='main-header'>
        <img src="./" className='Container-logo'/>
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



