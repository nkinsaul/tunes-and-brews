import React, {useState} from "react";
import './SearchForm.css'

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [date, setDate] = useState();

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  return (
    <form className="search-form">
      <h4>Search for Events</h4>
      <div className="inputs">
        <input 
          type='search'
          placeholder="Keyword"
          value={keyword}
          name="keyword"
          onChange={handleKeywordChange}
        />

        <input 
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
    </form>
  )
}

export default SearchForm