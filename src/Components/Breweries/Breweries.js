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

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
      <div>
        <h1>Nearby Breweries</h1>
        {filteredBreweries.map((brewery, index) => {
          return (
            <div key={index} className="brewery">
              <h3 className="brewE">{brewery.name}</h3>
              <p className="brewE">{brewery.street}</p>
              <a className="brew-link" href={`${brewery.reviewlink}`}>More Info</a>
            </div>
          )
        })} 
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