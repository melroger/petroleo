import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


export const NavBar = () => {
  return (
    <header>
      <div className='wrapper'>
        <span className='logo'>
          <Link to={"/"}>PETROLEO</Link>
        </span>
        <nav>
            <ul>
                <li><Link to={'/categoria/esculturas'} >Esculturas</Link></li>
                <li><Link to={'/categoria/asientos'} >Asientos</Link></li>
                <li><Link to={'/categoria/espejos'} >Espejos</Link></li>
            </ul>
        </nav>
        <Link to={"/cart"}><CartWidget /></Link>
        
      </div>
    </header>

  )
}
export default NavBar;