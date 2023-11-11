import React from 'react'
import './NavBar.css'
import CartWidjet from '../CartWidjet/CartWidjet'


const NavBar = () => {
  return (
    <div className='navbar-conteiner'>
      <nav className='navbar'>
        
        <ul className='lista'>
          <li>MOUSE</li>
          <li>TECLADO</li>
          <li>MICROFONO</li>
          <li>WEBCAM</li>
          <li>HEADSET</li>
        </ul>
      </nav>
      <button className='logo-carrito'>
      <CartWidjet/>
      </button>
    </div>
  )
}

export default NavBar