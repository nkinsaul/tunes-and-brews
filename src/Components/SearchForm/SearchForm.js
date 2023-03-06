import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import './SearchForm.css'

const SearchForm = ({updateSearch}) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    updateSearch(keyword.toLowerCase())
  }, [keyword])

  return (
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      <h4>Search for Events</h4>
      <div className="inputs">
        <input 
          data-cy="search"
          type='search'
          placeholder="Event or Venue Name"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchForm

SearchForm.propTypes = {
  updateSearch: PropTypes.func.isRequired
}