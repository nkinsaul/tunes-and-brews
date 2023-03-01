import React, {useState, useEffect} from "react";
import './Events.css'


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
    <div>
      {(loading) ? <h1>Loading...</h1> : <h1>{events[0].name}</h1>}
    </div>
  )
}

export default Events