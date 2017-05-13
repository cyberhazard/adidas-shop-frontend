/* eslint-disable no-confusing-arrow */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background-color: ${p => p.color ? `${p.color};` : '#E1E1E1;'}
  margin-right: 13px;
  cursor: pointer;
`;

export default () => (
  <Wrapper>
    <Button color="#C5C5C5" />
    <Button color="#4C88CB" />
    <Button color="#494949" />
    <Button />
  </Wrapper>
);
