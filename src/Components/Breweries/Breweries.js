import React, {useState, useEffect} from "react";
import { getBreweries } from "../../utilities/apiCalls";
import './Breweries.css'

const Breweries = ({postalCode, city}) => {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getBreweries(city)
    .then((data) => {return setBreweries(data), setLoading(false)})
    .catch(setError(error))
  },[])

  const filteredBreweries = breweries?.filter(brewery => {
    return brewery.zip === postalCode
  })

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
      filteredBreweries.map((brewery, index) => {
        return (
          <div key={index} className="brewery">
            <h3 className="brewE">{brewery.name}</h3>
            <p className="brewE">{brewery.street}</p>
            <a className="brew-link" href={`${brewery.reviewlink}`}>Link</a>
          </div>
        )
      })}
    </>
  )
}

export default Breweries