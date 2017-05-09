import React from 'react';

const FilterButton = ({label, selected}) => {
  return (
    <button className={`filter__text ${selected? 'filter__text_selected' : '' }`}>{label}</button>
  )
}

export default FilterButton;
