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
    .then((data) => { 
      if (data?.name === null) {
      throw new Error('error')
    } else {
      setEvent(data)
      setLoading(false)
      setError(false)
    }})
    .catch(() =>  {
      setError(true)
      setLoading(false)})
  }, [])

  const image = _event.images?.find(image => 
    image.ratio === '16_9' && image.width === 1024)

  const displayEvent = () => {
    let display;
    (loading) ? display = <h1>Loading...</h1> :
    (newError) ? display = <Navigate to ='/server-error' /> :
    display = (
      <div data-cy={`${_event.id}-details`} className="event-view-container">
        <div className="event-details">
          <div className="event-text">
            <div className="event-headers">
              <h1 data-cy="name" className="event-name">{_event.name}</h1>
              <h2 data-cy="venue" className="element">{_event._embedded.venues[0].name}</h2>
              {(saved) && <p className="pop-saved" data-cy="pop-saved">Saved to your events!</p>}
            </div>
            <div className="event-ticket-details">
              <p data-cy="date" className="element">{dayjs(_event.dates.start.dateTime).format('MMM DD, YYYY')}</p>
              {!_event.priceRanges ? <p data-cy="ticket">No ticket Data available</p> : 
              <p  className="element"> 
                ${Math.round(_event.priceRanges[0].min)} - 
                ${Math.round(_event.priceRanges[0].max)}
              </p>}
              <a className="url" data-cy="url" href={`${_event.url}`}>Buy Tickets</a>
              <button data-cy="save" id={_event.id} onClick={(e) => handleClick(e)} className="save-button">Save Event</button>
             </div>
          </div>
          <img data-cy='image' className='event-image' src={image.url} alt={`${_event.name}`}/>
        </div>
        <div data-cy="breweries" className="breweries-container">
          <Breweries 
            postalCode={_event._embedded.venues[0].postalCode}
            city={_event._embedded.venues[0].city.name.toLowerCase()}
          />
        </div>
      </div>
    )
      return display
  }

  return (
    <>
      {displayEvent()}
    </>
  )

}

export default EventView

EventView.propTypes = {
  saveEvent: PropTypes.func.isRequired
}