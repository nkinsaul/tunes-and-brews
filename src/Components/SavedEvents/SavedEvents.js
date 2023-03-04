
import './SavedEvents.css'
import EventCard from "../EventCard/EventCard";

const SavedEvents = ({events}) => {
  return (
    <>
      <h1 className="saved-events-header">Your Events</h1>
      <div className="events-home">
        <div className="events-card-container">
          {events.map(_event => 
            <EventCard 
              key={_event.id}
              id={_event.id}
              image={_event.image}
              name={_event.name}
              venue={_event.venue}
              date={_event.date}
            />)}
        </div>
      </div>  
    </>
  )
}

export default SavedEvents