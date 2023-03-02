import React, {useState, useEffect} from "react";
import './Events.css'
import EventCard from "../EventCard/EventCard";
import SearchForm from "../SearchForm/SearchForm";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getEvents = async () => {
    const url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=385&apikey=GsEb44ExGWUeR5lOEg7Tugd2PdKAnKWl'

    try {
      const response = await fetch(url)
      const events = await response.json()
      setEvents(events._embedded.events)
      setLoading(false)
    } catch(error) {
      setError(error.status)
    }
  }

  useEffect(() => {
    getEvents()
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
              image={_event.images.find(image => image.ratio === '3_2' && image.width === 640)}
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