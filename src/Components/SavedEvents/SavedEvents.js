
import './SavedEvents.css'
import EventCard from "../EventCard/EventCard";

const SavedEvents = ({events}) => {


  return (
    <>
      <h1 className="saved-events-header">Your Events</h1>
      <div className="events-home">
        <div className="events-card-container">
          {events.map(_event => 
          <div key={`${_event.id}-c`} className='card-container'>
            <EventCard 
              key={_event.id}
              id={_event.id}
              image={_event.image}
              name={_event.name}
              venue={_event.venue}
              date={_event.date}
            />
            <button id={_event.id} key={`${_event.id}-b`}>Remove from Saved Events</button>
          </div>)}
        </div>
      </div>  
    </>
  )
}

export default SavedEvents