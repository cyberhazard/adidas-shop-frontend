import styled from 'styled-components';
import media from './../../media';

export const StyledSearch = styled.div`
  width: 100%;
  position: relative;
  padding: 0 22px;
  ${media.md`display: none;`}
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-family: "Andale Mono";
  background-color: transparent;
  border: none;
  border-bottom: 4px solid #242424;
  color: #fff;
  font-size: 28px;
  padding-left: 60px
`;

export const InputImage = styled.img`
  position: absolute;
  bottom: 12px;
  left: 36px
`;
