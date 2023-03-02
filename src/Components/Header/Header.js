import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div className="header">
      <Link to='/events'>Home</Link>
      <h1 className="app-name">Brew Beats</h1>
      <Link to='/saved'>Saved</Link>
    </div>
  )
}

export default Header;