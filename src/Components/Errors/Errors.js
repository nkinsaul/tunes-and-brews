import React from "react";
import { Link } from "react-router-dom";
import './Errors.css'

const Error = () => {
  return (
    <div className="error-container">
      <h1>Page Not Found</h1>
      <Link to ={'/'}>Home</Link>
    </div>
  )
}

export default Error