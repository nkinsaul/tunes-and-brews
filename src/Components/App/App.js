
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'

const App = () => {
  // const [events, setEvents] = useState();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Events />}/>
        <Route path='/:eventID' element={<EventView />}/>
      </Routes>
    </div>
  );
}

export default App;
