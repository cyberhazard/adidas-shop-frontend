import styled from 'styled-components';
import media from './../../media';

export const Wrapper = styled.div`
  position: relative;
  padding: 40px 22px 0;
  margin-bottom: 100px;
  ${media.tablet`margin-bottom:0;`}
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 46px;
  background-color: transparent;
  border: none;
  border-bottom: 4px solid #373737;
  color: #ffffff;
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
`;

export const Icon = styled.img`
  position: absolute;
  left: 30px;
  bottom: 10px;
`;
