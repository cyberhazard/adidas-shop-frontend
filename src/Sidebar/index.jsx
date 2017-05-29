import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Toggle from './Toggle';
import Search from './Search';
import Menu from './Menu';
import media from './../media';

const Wrapper = styled.div`
  flex: 0 0 414px;
  height: 100vh;
  background-color: #0F0F0F;
  padding-top: 50px;
  overflow: auto;
  ${media.giant`flex-basis: 327px;`}
  ${media.tablet`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    max-height: 100vh;
    z-index: 2;
    ${p => p.isOpen && 'height: auto;'}
  `}
`;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Wrapper isOpen={this.state.isOpen}>
        <Logo />
        <Toggle onClick={this.toggle} />
        <Search />
        <Menu />
      </Wrapper>
    );
  }
}
