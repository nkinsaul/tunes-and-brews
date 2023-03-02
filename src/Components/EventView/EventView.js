import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import './EventView.css'
import { getEvent } from "../../utilities/apiCalls";

const EventView = () => {
  const [_event, setEvent] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const location = useLocation();
  const event_id = location.pathname.slice(1);

  useEffect(() => {
    getEvent(event_id)
    .then((data) => {return setEvent(data), setLoading(false)})
    .catch(setError(error))
  }, [])

  const image = _event.images?.find(image => 
    image.ratio === '16_9' && image.width === 1024)

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
      <div>
        <h1>{_event.name}</h1>
        <h2>{_event._embedded.venues[0].name}</h2>
        <img src={image.url} />
      </div>}
    </>
  )
}

export default EventView
