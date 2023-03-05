import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div className="header">
      <Link data-cy="home-link" className="link" to='/'>Home</Link>
      <h1 className="app-name" data-cy="app-name">Brew Beats</h1>
      <Link data-cy="saved-link" className="link" to='/saved'>Saved</Link>
    </div>
  )
}

export default Header;