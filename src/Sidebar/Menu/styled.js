// menu menu__item menu__item_selected
import styled from 'styled-components';
import media from './../../media';

export const Wrapper = styled.nav`
  text-align: center;
  text-transform: uppercase;
  ${media.md`display:none;`}
`
export const MenuItem = styled.div`
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
  color: #3c3c3c;
  cursor: pointer;
  position: relative;
  transition: .3s;
  ${props=>props.selected? 'color: #fff;'   : ''}
  &:hover {
    color: #fff;
  }
`;

export const Span = styled.span`
  ${props=>props.selected? `position: relative;
  &:after {
    content: '\\f078';
    position: absolute;
    top: 8px;
    right: -18px;
    font-family: FontAwesome;
    font-size: 12px;
  }
  ` :''}
`;
