import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ToggleMenu from './ToggleMenu';
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
    ${p => p.isOpened && 'height: auto;'}
  `}
`;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
  }

  toggleMenuHandler() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Wrapper isOpened={this.state.isOpened}>
        <Logo />
        <ToggleMenu click={this.toggleMenuHandler} />
        <Search />
        <Menu />
      </Wrapper>
    );
  }
}
