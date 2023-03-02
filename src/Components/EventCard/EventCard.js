import React from "react";
import './EventCard.css'

const EventCard = ({image, name, venue}) => {
  return (
    <div className="event-card">
      <img className="event-image" src={image.url}/>
      <div className="event-info">
        <p className="name">{name}</p>
        <p className="venue">{venue}</p>
      </div>
    </div>
  )
}

export default EventCard