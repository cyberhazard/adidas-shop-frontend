import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  margin: 32px 0 56px;
`;
export const MenuItem = styled.div`
  margin: 24px 0;
`;

export const MenuLink = styled(Link)`
  font-family: "Andale Mono";
  font-size: 24px;
  font-weight: 400;
  color: #3c3c3c;
  transition: .3s;
  ${props=>props.selected? 'color: #fff;':''}
  &:hover {
    color: #fff;
  }
`;
