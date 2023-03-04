
import './App.css';
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'
import EventView from '../EventView/EventView';
import Events from '../Events/Events';
import SavedEvents from '../SavedEvents/SavedEvents';
import { useState, useEffect } from 'react';
import { getEvents } from '../../utilities/apiCalls';

const App = () => {

  const [events, setEvents] = useState([])
  const [savedEvents, setSavedEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const addSavedEvent = (savedEventId) => {
    const savedEvent = events.find(_event =>
      _event.id === savedEventId)
    setSavedEvents(prevSavedEvents => 
      [...prevSavedEvents, savedEvent])
  }

  useEffect(() => {
    getEvents()
    .then((data) => {return setEvents(data._embedded.events), setLoading(false)})
    .catch(setError(error))
  },[])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/events' element= {(loading) ? 
          <h1>Loading...</h1> : 
          <Events events={events}/>}/>
        <Route path='/:eventID' element={<EventView saveEvent={addSavedEvent}/>}/>
        <Route path='/saved' element={<SavedEvents events={savedEvents} />}/>
      </Routes>
    </div>
  );
}

export default App;
