import React from 'react';
import { Wrapper, Input, Icon } from './styled'


const Search = () => (
  <Wrapper>
    <Input type="text"/>
    <Icon src={require('./search.svg')} alt=""/>
  </Wrapper>
);

export default Search;
