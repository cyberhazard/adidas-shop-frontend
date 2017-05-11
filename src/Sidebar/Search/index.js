import React from 'react';
import { Wrapper, Input, SearchImage } from './styled'


const Search = () => (
  <Wrapper>
    <Input type="text"/>
    <SearchImage src={require('./search.svg')} alt=""/>
  </Wrapper>
);

export default Search;
