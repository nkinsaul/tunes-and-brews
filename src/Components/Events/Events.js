import React, {useState, useEffect} from "react";
import './Events.css'
import EventCard from "../EventCard/EventCard";
import SearchForm from "../SearchForm/SearchForm";
import { getEvents } from "../../utilities/apiCalls";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getEvents()
    .then((data) => {return setEvents(data._embedded.events), setLoading(false)})
    .catch(setError(error))
  },[])

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
      <div className="events-home">
        <SearchForm />
        <div className="events-card-container">
          {events.map(_event => 
            <EventCard 
              key={_event.id}
              id={_event.id}
              image={_event.images.find(image => 
                image.ratio === '3_2' && image.width === 640)}
              name={_event.name}
              venue={_event._embedded.venues[0].name}
              date={_event.dates.start.dateTime}
            />)}
        </div>
      </div>  
      }
    </>
  )
}

export default Events