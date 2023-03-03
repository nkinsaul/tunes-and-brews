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

  return (
    <h1>Brewery List</h1>
  )
}

export default Breweries