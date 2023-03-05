
import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom'
import EventView from '../EventView/EventView';
import Events from '../Events/Events';
import SavedEvents from '../SavedEvents/SavedEvents';
import { useState, useEffect } from 'react';
import { getEvents } from '../../utilities/apiCalls';
import { cleanEvents } from '../../utilities/apiCleaning';
import Error from '../Errors/Errors';
import ServerError from '../Errors/ServerError';

const App = () => {

  const [events, setEvents] = useState([])
  const [savedEvents, setSavedEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const addSavedEvent = (savedEventId) => {
    const savedEvent = events.find(_event =>
      _event.id === savedEventId)
    
    if(!savedEvents.includes(savedEvent)) {
      setSavedEvents(prevSavedEvents => 
        [...prevSavedEvents, savedEvent])
    }
  }

  const removeSavedEvent = (savedEventId) => {
    const filteredEvents = savedEvents.filter(_event => {
      return _event.id !== savedEventId
    })
    setSavedEvents(filteredEvents)
  }

  const getCleanEvents = async () => {
    const events = getEvents()
  
  try {
    const eventsData = await events
    const cleanedEventsData = await cleanEvents(eventsData._embedded.events)
    setEvents(cleanedEventsData)
    setLoading(false)
    } catch(error) {
      setError(true)
    }
  } 

  useEffect(() => {
    getCleanEvents()
  },[])

  return (
    <div className="app">
      <Header />
      <Routes>

          <Route exact path='/' element= {
            (loading) ? <h1>Loading...</h1> : 
            <Events events={events}/>}
          />

          <Route exact path='/events/:eventID' element={<EventView saveEvent={addSavedEvent}/>}/>

          <Route exact path='/saved' element={<SavedEvents events={savedEvents} removeSavedEvent={removeSavedEvent}/>}/>

          <Route exact path='/server-error' element={<ServerError />}/>

          <Route path='/*' element={<Error />}/>

      </Routes>
    </div>
  );
}

export default App;
