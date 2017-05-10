import React from 'react';
import searchImg from './search.svg';
import { InputImage, Input, StyledSearch } from './styled';

const Search = () => {
  return (
    <StyledSearch>
      <InputImage src={searchImg} alt="" />
      <Input />
    </StyledSearch>
  )
}

export default Search
