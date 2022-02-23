import React from 'react'

const SearchBar = ({setBusqueda}) => {
  return (
    <input type="text" className="form-control form-search" onChange={(event) => {
      setBusqueda(event.target.value);
    }} />
  )
}

export default SearchBar
