import React from "react";
import './EventCard.css'
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const EventCard = ({image, name, venue, date, id}) => {
  return (
    <Link to={`/events/${id}`}>
      <div className="event-card">
        <img className="event-image" src={image.url}/>
        <div className="event-info">
          <p className="p">{name}</p>
          <p className="p">{venue}</p>
          <p className="p">{dayjs(date).format('MMM DD, YYYY')}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard