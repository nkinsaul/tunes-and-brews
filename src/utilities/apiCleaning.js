import React from "react";
import dayjs from "dayjs";

export const cleanEvents = (events) => {
  return events.map(_event => {
    return {
      id: _event.id,
      name: _event.name,
      image: _event.images.find(image => 
          image.ratio === '3_2' && image.width === 640),
      venue: _event.embedded.venues[0].name,
      date: dayjs(_event.dates.start.dateTime).format('MMM DD, YYYY')
    }
  }).sort((a, b) => {
    return a.date - b.date
  })
}