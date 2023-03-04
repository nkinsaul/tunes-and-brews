import React, {useState, useEffect} from "react";
import './SearchForm.css'

const SearchForm = ({updateSearch}) => {
  const [keyword, setKeyword] = useState('');
  // const [date, setDate] = useState('');


  useEffect(() => {
    updateSearch(keyword.toLowerCase())
  }, [keyword])

  return (
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      <h4>Search for Events</h4>
      <div className="inputs">
        <input 
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