import React from "react"


function Navbar() {
    return(
        <header className='main-header'>
        <img src="logo192.png" className='Container-logo'/>
        <ul className='navbar'>
          <li><button>Inicio</button></li>
          <li><button>Productos</button></li>
          <li><button>Nosotros</button></li>
          <li><button>Contacto</button></li>
        </ul>
      </header>
    )
}

export default Navbar;



