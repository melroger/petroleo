import React from 'react'
import CartWidget from './CartWidget';

export const NavBar = () => {
  return (
    <header>
      <div className='wrapper'>
        <span className='logo'>
          <a href="#">PETROLEO</a>
        </span>
        <nav>
            <ul>
                <li> <a href='#'>Esculturas</a> </li>
                <li> <a href='#'>Lámparas</a> </li>
                <li> <a href='#'>Asientos</a> </li>
                <li> <a href='#'>Espejos</a> </li>
                <li> <a href='#'>Mesas</a> </li>
                <li> <a href='#'>Colecciones</a> </li>
                <li> <a href='#'>Otros</a> </li>
            </ul>
        </nav>
        <CartWidget />
      </div>
    </header>

  )
}
export default NavBar;