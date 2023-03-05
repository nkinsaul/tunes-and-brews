import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div className="header">
      <Link className="link" to='/'>Home</Link>
      <h1 className="app-name">Brew Beats</h1>
      <Link className="link" to='/saved'>Saved</Link>
    </div>
  )
}

export default Header;