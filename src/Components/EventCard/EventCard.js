import React from "react";
import './EventCard.css'

const EventCard = ({image, name, venue}) => {
  console.log(venue)
  return (
    <div className="event-card">
      <h2 className="name">{name}</h2>
      <h3 className="venue">{venue}</h3>
      <img className="event-image" src={image.url}/>
    </div>
  )
}

export default EventCard