import { Link } from 'react-router-dom';
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

export const MainLink = styled(Link)`
  position: relative;
  cursor: pointer;
  color: #303030;
  ${p => p.isSelected && 'color: #ffffff;'}
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  transition: .3s;
  &:hover {
    color: #ffffff;
  }
  ${p => p.isSelected && `
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

export const SubLink = styled(Link)`
  display: block;
  color: #303030;
  ${p => p.isSelected && 'color: #ffffff;'}
  font-family: "Andale Mono";
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 26px 0;
  transition: .3s;
  &:hover {
    color: #ffffff;
  }
`;
