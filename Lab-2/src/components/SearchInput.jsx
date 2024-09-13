import React from 'react'

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      name="search"
      placeholder="Search tasks"
      className="searchInput"
    />
  )
}

export default SearchInput
