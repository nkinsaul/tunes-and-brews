import React from "react";
import PropTypes from 'prop-types';
import './EventCard.css'
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const EventCard = ({image, name, venue, date, id}) => {
  return (
    
      <div className="event-card" data-cy={id} >
        <img className="event-images" data-cy={`${id}-img`} src={image}/>
          <div className="event-info">
          <Link to ={`/events/${id}`}>
            <p data-cy={`${id}-name`} className="p name">{name}</p>
          </Link>
            <p data-cy={`${id}-venue`} className="p">{venue}</p>
            <p data-cy={`${id}-date`} className="p">{dayjs(date).format('MMM DD, YYYY')}</p>
          </div> 
      </div>
   
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