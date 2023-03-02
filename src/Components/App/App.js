
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'
import EventView from '../EventView/EventView';
import Events from '../Events/Events';
import SavedEvents from '../SavedEvents/SavedEvents';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/events' element={<Events />}/>
        <Route path='/events/:eventID' element={<EventView />}/>
        <Route path='/saved' element={<SavedEvents />}/>
      </Routes>
    </div>
  );
}

export default App;
