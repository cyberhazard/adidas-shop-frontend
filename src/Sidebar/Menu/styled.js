import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  margin: 12px 0;
`;

export const Button = styled.button`
  position: relative;
  cursor: pointer;
  color: #303030;
  ${p => p.isOpened && 'color: #ffffff;'}
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  transition: .3s;
  &:hover {
    color: #ffffff;
  }
  ${p => p.isOpened && `
    &:after {
      content: "\uf078";
      font-family: 'FontAwesome';
      font-size: 14px;
      position: absolute;
      top: 7px;
      right: -22px;
    }
  `}
`;

export const Link = styled(NavLink)`
  display: block;
  color: #303030;
  font-family: "Andale Mono";
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 26px 0;
  transition: .3s;
  &:hover {
    color: #ffffff;
  }
  &.is-active {
    color: #ffffff;
  }
`;
