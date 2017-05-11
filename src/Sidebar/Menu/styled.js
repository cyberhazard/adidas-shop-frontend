import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuItem = styled.div`
  margin: 12px 0;
`

export const Text = styled.span`
  position: relative;
  cursor: pointer;
  color: #303030;
  ${p=>p.selected && 'color: #ffffff;'}
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  transition: .3s;
  &:hover {
    color: #ffffff;
  }
  ${p=>p.selected && `
    &:after {
      content: "\uf078";
      font-family: 'FontAwesome';
      font-size: 14px;
      position: absolute;
      top: 7px;
      right: -22px;
    }
  `}
`

export const StyledLink = styled(Link)`
  display: block;
  color: #303030;
  ${p=>p.selected && 'color: #ffffff;'}
  font-family: "Andale Mono";
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 26px 0;
  transition: .3s;
  &:hover {
    color: #ffffff;
  }
`
