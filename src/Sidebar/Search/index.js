import React from 'react';
import { Wrapper, Input, Icon } from './styled'


export default () => (
  <Wrapper>
    <Input type="text"/>
    <Icon src={require('./search.svg')} alt=""/>
  </Wrapper>
);
