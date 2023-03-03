import React, {useState, useEffect} from "react";
import './SearchForm.css'

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [date, setDate] = useState('');


  useEffect(() => {
    console.log('date changed', date)
  }, [keyword, date])

  return (
    <form className="search-form">
      <h4>Search for Events</h4>
      <div className="inputs">
        <input 
          type='search'
          placeholder="Keyword"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />

        <input 
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchForm