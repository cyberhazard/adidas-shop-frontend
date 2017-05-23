import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 4px solid ${p => (p.isSelected ? '#E9E9EB' : 'transparent')};
  flex: 0 0 166px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  color: #c0c0c0;
  font-family: "Avenir Next";
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

export default ({ img, isSelected, children, id, click }) => (
  <Wrapper isSelected={isSelected} onClick={() => click && click(id)}>
    { img && <Image src={img} /> }
    { children }
  </Wrapper>
);
