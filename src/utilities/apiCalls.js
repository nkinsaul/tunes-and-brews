import { redirect } from "react-router-dom"

const ticketMasterKey = process.env.REACT_APP_TICKETMASTERKEY
const beerMappingKey = process.env.REACT_APP_BEERMAPPING


export const getEvents = () => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=385&apikey=${ticketMasterKey}`)
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  }).catch(() => redirect('/server-error'))
}

export const getEvent = (event_id) => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events/${event_id}.json?classificationName=music&dmaId=385&apikey=${ticketMasterKey}`)
  .then (response => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}

export const getBreweries = (city) => {
  return fetch(`https://beermapping.com/webservice/loccity/${beerMappingKey}/${city}&s=json`)
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}