import React from "react";
import PropTypes from 'prop-types';
import './EventCard.css'
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const EventCard = ({image, name, venue, date, id}) => {
  return (
    <Link to ={`/events/${id}`}>
      <div className="event-card" data-cy={id} >
        <img className="event-images" data-cy={`${id}-img`} src={image}/>
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

EventCard.propTypes = { 
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}