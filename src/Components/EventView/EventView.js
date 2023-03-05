import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { useLocation, Navigate } from "react-router-dom";
import './EventView.css';
import { getEvent } from "../../utilities/apiCalls";
import dayjs from "dayjs";
import Breweries from "../Breweries/Breweries";

const EventView = ({saveEvent}) => {
  const [_event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [newError, setError] = useState(false);
  const [saved, setSaved] = useState(false)

  const location = useLocation();
  const event_id = location.pathname.slice(8);

  const handleClick = (event) => {
    event.preventDefault()
    saveEvent(event.target.id)
    setSaved(true)
  }

  useEffect(() => {
    getEvent(event_id)
    .then((data) => {return setEvent(data), setLoading(false)})
    .catch(() =>  setError(true))
  }, [])

  const image = _event.images?.find(image => 
    image.ratio === '16_9' && image.width === 1024)

  return (
    <>
      {
      (newError) ? <Navigate to='/*' /> :
      (loading) ? <h1>Loading...</h1> :
      <div data-cy={`${_event.id}-details`} className="event-view-container">
        <div className="event-details">
          <div className="event-text">
            <div className="event-headers">
              <h1 className="element">{_event.name}</h1>
              <h2 className="element">{_event._embedded.venues[0].name}</h2>
              {(saved) && <p>Saved to your events!</p>}
            </div>
            <div className="event-ticket-details">
              <p className="element">{dayjs(_event.dates.start.dateTime).format('MMM DD, YYYY')}</p>
              {!_event.priceRanges ? <p>No ticket Data available</p> : 
              <p className="element">Ticket price range: 
                ${Math.round(_event.priceRanges[0].min)} - 
                ${Math.round(_event.priceRanges[0].max)}
              </p>}
              <a href={`${_event.url}`}>Buy Tickets</a>
              <button id={_event.id} onClick={(e) => handleClick(e)} className="save-button">Save Event</button>
             </div>
          </div>
          <img data-cy={`${_event.id}-single-view`}className='event-image' src={image.url} />
        </div>
        <div className="breweries-container">
          <Breweries 
            postalCode={_event._embedded.venues[0].postalCode}
            city={_event._embedded.venues[0].city.name.toLowerCase()}
          />
        </div>
      </div>}
    </>
  )
}

export default EventView

EventView.propTypes = {
  saveEvent: PropTypes.func.isRequired
}