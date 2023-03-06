import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
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

  const nearbyBreweries = filteredBreweries?.map((brewery, index) => {
    return (
      <div id={index} key={index} className="brewery">
        <h3 data-cy={`${index}-name`} className="brewE">{brewery.name}</h3>
        <p data-cy={`${index}-street`} className="brewE">{brewery.street}</p>
        <a data-cy={`${index}-link`} className="brew-link" href={`${brewery.reviewlink}`}>More Info</a>
      </div>
    )
  })

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
      <div className="breweries">
        <h1>Nearby Breweries</h1>
        {nearbyBreweries}
      </div>
      }
    </>
  )
}

export default Breweries

Breweries.propTypes = {
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}