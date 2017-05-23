import styled from 'styled-components';
import media from './../media';

export const Wrapper = styled.div`
  flex-grow: 2;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${media.tablet`padding-top: 64px;`}
`;

export const ProductInfo = styled.div`
  flex-grow: 2;
  overflow: auto;
  position: relative;
  padding: 50px 30px 0;
`;
