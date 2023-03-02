import React from "react";
import './EventCard.css'
import dayjs from "dayjs";

const EventCard = ({image, name, venue, date}) => {
  return (
    <div className="event-card">
      <img className="event-image" src={image.url}/>
      <div className="event-info">
        <p className="p">{name}</p>
        <p className="p">{venue}</p>
        <p className="p">{dayjs(date).format('MMM DD, YYYY')}</p>
      </div>
    </div>
  )
}

export default EventCard