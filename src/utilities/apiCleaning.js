
import dayjs from "dayjs";

export const cleanEvents = (events) => {
  const cleanedEvents = events.map(_event => {
    return  {
      id: _event.id,
      name: _event.name,
      image: _event.images.find(image => 
          image.ratio === '3_2' && image.width === 640),
      venue: _event._embedded.venues[0].name,
      date: new Date(_event.dates.start.localDate)
    }
  })
  const sortedEvents = cleanedEvents.sort((a, b) => {
    return a.date - b.date
  })
  sortedEvents.forEach(_event => {
    _event.date = dayjs(_event.date).format('MMM DD, YYYY')
    _event.image = _event.image.url
  })
  return sortedEvents
}