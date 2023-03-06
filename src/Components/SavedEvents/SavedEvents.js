import React from 'react';
import PropTypes from 'prop-types'
import './SavedEvents.css'
import EventCard from "../EventCard/EventCard";

const SavedEvents = ({events, removeSavedEvent}) => {

  const handleClick = (id) => {
    removeSavedEvent(id)
  }

  const savedEvents = events?.map(_event => {
    return (
      <div key={`${_event.id}-c`} className='card-container'>
        <EventCard 
          key={_event.id}
          id={_event.id}
          image={_event.image}
          name={_event.name}
          venue={_event.venue}
          date={_event.date}
        />
        <button 
          onClick={(event) => handleClick(event.target.id)}
          id={_event.id} 
          key={`${_event.id}-b`}
          >Remove from Saved Events</button>
          </div>
    )
  })

  return (
    <>
      <h1 className="saved-events-header">Your Events</h1>
      <div className="events-home">
        <div className="events-card-container">
          {savedEvents}
        </div>
      </div>  
    </>
  )
}

export default SavedEvents

SavedEvents.propTypes = {
  events: PropTypes.array.isRequired,
  removeSavedEvent: PropTypes.func.isRequired
}