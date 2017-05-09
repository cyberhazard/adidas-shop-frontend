import React from 'react';
import searchImg from './search.svg';

const Search = () => {
  return (
    <div className="search">
      <img className="search__image" src={searchImg} alt="" />
      <input className="search__input" />
    </div>
  )
}

export default Search
