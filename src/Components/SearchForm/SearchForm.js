import React, {useState} from "react";
import './SearchForm.css'

const SearchForm = () => {
  const [keyword, setKeyword] = useState();
  const [date, setDate] = useState();

  return (
    <form className="search-form">
      <h4>Search for Events</h4>
      <div className="inputs">
        <input 
          type='search'
          placeholder="Keyword"
          value={keyword}
          name="keyword"
        />

        <input 
          type="date"
          value={date}
        />
      </div>
    </form>
  )
}

export default SearchForm