import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.div`
  margin: 12px 0;
`;

export const MainLink = styled(NavLink)`
  position: relative;
  cursor: pointer;
  color: #303030;
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  transition: .3s;
  &:hover {
    color: #ffffff;
  }
  & + nav {
    display: none;
  }
  &:after {
    content: "\uf078";
    font-family: 'FontAwesome';
    font-size: 14px;
    position: absolute;
    top: 7px;
    right: -22px;
    transform: rotate(-90deg);
  }
  &.is-selected {
    color: #ffffff;
  }
  &.is-selected + nav {
    display: block;
  }
  &.is-selected:after {
    transform: rotate(0);
  }
`;

export const SubLink = styled(NavLink)`
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
  &.is-selected {
    color: #ffffff;
  }
`;
