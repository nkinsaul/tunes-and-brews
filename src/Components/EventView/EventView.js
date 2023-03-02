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
      const image = _event.images.find(image => image.ratio === '16_9')
    } catch {
      setError(error.status)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  const image = _event.images?.find(image => 
    image.ratio === '16_9' && image.width === 1024)

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
      <div>
        <img src={image.url} />
      </div>}
    </>
  )
}

export default EventView
