import React from "react";
import './ServerError.css'

const ServerError = ({error}) => {
  return (
    <>
      <h1 className="server-error">Something is wrong with our servers.  Come back later.</h1>
      <p>{error}</p>
    </>
  )
}

export default ServerError