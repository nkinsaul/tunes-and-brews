
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
              image={_event.images.find(image => 
                image.ratio === '3_2' && image.width === 640)}
              name={_event.name}
              venue={_event._embedded.venues[0].name}
              date={_event.dates.start.dateTime}
            />)}
        </div>
      </div>  
    </>
  )
}

export default SavedEvents