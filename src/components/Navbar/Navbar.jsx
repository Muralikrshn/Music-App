import React, { useState } from 'react'
import './Navbar.css'

import { assets } from '../../assets/app'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={() => setMenu("albums")} className={menu==="albums"?"active":""}>albums</li>
        <li onClick={() => setMenu("playlists")} className={menu==="playlists"?"active":""}>playlists</li>
        <li onClick={() => setMenu("about")} className={menu==="about"?"active":""}>about</li>
      </ul>
      <div className="navbar_right">
        <input type="text" name="searchsong" placeholder='Search' />
        <button className='signin_btn'>Sign in</button>
      </div>

    </div>
  )
}

export default Navbar