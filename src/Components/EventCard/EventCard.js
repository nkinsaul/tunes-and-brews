import React from "react";
import './EventCard.css'

const EventCard = ({image, name}) => {
  return (
    <div className="event-card">
      <img className="event-image" src={image.url}/>
    </div>
  )
}

export default EventCard