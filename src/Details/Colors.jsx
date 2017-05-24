import React from 'react';
import styled from 'styled-components';
import media from './../media';

const Wrapper = styled.div`
  display: inline-flex;
  margin-right: 20px;
  ${media.tablet` margin-right: 0;`}
`;

const Button = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background-color: ${p => (p.color ? `${p.color};` : '#E1E1E1;')}
  margin-right: 13px;
  cursor: pointer;
`;

const colors = ['#C5C5C5', '#4C88CB', '#494949', '#E1E1E1'];

export default ({ setColor }) => (
  <Wrapper>
    {colors.map(color => <Button onClick={() => setColor(color)} color={color} />)}
  </Wrapper>
);
