import React from 'react';
import FilterButton from './FilterButton';
import filterImage from './filter.png';


const Filter = () => {
  return (
    <div className="filter">
      <img className="filter__image" src={filterImage} alt="" />
      <section>
        <FilterButton label="Man" selected={true} />
        <FilterButton label="Woman"/>
      </section>
      <section>
        <span className="filter__title filter__text filter__text_selected">Size</span>
        <FilterButton label="36"/>
        <FilterButton label="37"/>
        <FilterButton label="38"/>
        <FilterButton label="39"/>
        <FilterButton label="40"/>
        <FilterButton label="41" selected={true} />
        <FilterButton label="42"/>
      </section>
    </div>
  )
};

export default Filter;
