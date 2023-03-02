import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import './EventView.css'
const apiKey = process.env.REACT_APP_TICKETMASTERKEY


const EventView = () => {
  const [_event, setEvent] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const location = useLocation();
  const event_id = location.pathname.slice(1);

  const getEvent = async () => {
  const url = `https://app.ticketmaster.com/discovery/v2/events/${event_id}.json?classificationName=music&dmaId=385&apikey=${apiKey}`
   
    try {
      const response = await fetch(url)
      const _event = await response.json()
      setEvent(_event)
      setLoading(false)
    } catch {
      setError(error.status)
    }
  }

  useEffect(() => {
    getEvent(event_id)
  }, [])

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
      <h1>{_event.name}</h1>}
    </>
  )
}

export default EventView
