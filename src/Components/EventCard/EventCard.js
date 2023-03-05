import React from "react";
import './EventCard.css'
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const EventCard = ({image, name, venue, date, id}) => {
  return (
    <Link to ={`/events/${id}`}>
      <div data-cy={id} className="event-card">
        <img data-cy={`${id}-img`} className="event-images" src={image}/>
        <div className="event-info">
          <p data-cy={`${id}-name`}className="p">{name}</p>
          <p data-cy={`${id}-venue`} className="p">{venue}</p>
          <p data-cy={`${id}-date`} className="p">{dayjs(date).format('MMM DD, YYYY')}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard