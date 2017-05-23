import React from 'react';
import styled from 'styled-components';
import media from './../../media';

const Img = styled.img`
  display: none;
  ${media.tablet`
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
  `}
`;

export default ({ click }) => <Img onClick={click} src={require('./toggle-menu.png')} />;
