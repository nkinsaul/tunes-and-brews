import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import './EventView.css';
import { getEvent } from "../../utilities/apiCalls";
import dayjs from "dayjs";
import Breweries from "../Breweries/Breweries";

const EventView = () => {
  const [_event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
      <div className="event-view-container">
        <div className="event-details">
          <div className="event-text">
            <div className="event-headers">
              <h1 className="element">{_event.name}</h1>
              <h2 className="element">{_event._embedded.venues[0].name}</h2>
            </div>
            <div className="event-ticket-details">
              <p className="element">{dayjs(_event.dates.start.dateTime).format('MMM DD, YYYY')}</p>
              <p className="element">Ticket price range: 
                ${Math.round(_event.priceRanges[0].min)} - 
                ${Math.round(_event.priceRanges[0].max)}
              </p>
              <a href={`${_event.url}`}>Buy Tickets</a>
             </div>
          </div>
          <img className='event-image' src={image.url} />
        </div>
        <div className="breweries-container">
          <Breweries 
            postalCode={_event._embedded.venues[0].postalCode}
          />
        </div>
      </div>}
    </>
  )
}

export default EventView


// event._embedded.venues[0].postalCode