import React, {useState} from "react";
import PropTypes from 'prop-types';
import './Events.css'
import EventCard from "../EventCard/EventCard";
import SearchForm from "../SearchForm/SearchForm";
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Events = ({events}) => {

  const [filteredEvents, setFilteredEvents] = useState([]);

  const updateSearch = (keyword) => {
    const filteredEvents = events.filter(_event => 
      _event.name.toLowerCase().includes(keyword) || 
      _event.venue.toLowerCase().includes(keyword))
    setFilteredEvents(filteredEvents)
  }

  const renderEvents = () => {
    return filteredEvents ? filteredEvents : events 
  }

  return (
    <div className="events-home">
      <SearchForm updateSearch={updateSearch}/>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <div className="events-card-container">
            {renderEvents().map(_event => 
            <SwiperSlide key={_event.id}>
              <EventCard 
                id={_event.id}
                image={_event.image}
                name={_event.name}
                venue={_event.venue}
                date={_event.date}
              />
            </SwiperSlide>)}
          </div>
        
        </Swiper>
      </div>
    </div>
  )
}

export default Events

Events.propTypes = {
  events: PropTypes.array.isRequired
}