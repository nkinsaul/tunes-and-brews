
const apiKey = process.env.REACT_APP_TICKETMASTERKEY

export const getEvent = (event_id) => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events/${event_id}.json?classificationName=music&dmaId=385&apikey=${apiKey}`)
  .then (response => {
    if(!response.ok) {
      throw new Error('Something went wrong')
    } else {
      return response.json()
    }
  })
}