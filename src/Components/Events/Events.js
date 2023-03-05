import React, {useState} from "react";
import './Events.css'
import EventCard from "../EventCard/EventCard";
import SearchForm from "../SearchForm/SearchForm";

const Events = ({events}) => {

  const [filteredEvents, setFilteredEvents] = useState([]);

  const updateSearch = (keyword) => {
    const filteredEvents = events.filter(_event => 
      _event.name.toLowerCase().includes(keyword) || 
      _event.venue.toLowerCase().includes(keyword))
    setFilteredEvents(filteredEvents)
  }

  const renderEvents = () => {
    return filteredEvents ? filteredEvents : events 
  }

  return (
    <>
      <div className="events-home">
        <SearchForm updateSearch={updateSearch}/>
        <div className="events-card-container">
          {renderEvents().map(_event => 
            <EventCard 
              key={_event.id}
              id={_event.id}
              image={_event.image}
              name={_event.name}
              venue={_event.venue}
              date={_event.date}
            />)}
        </div>
      </div>  
    </>
  )
}

export default Events