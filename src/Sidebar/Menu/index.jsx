import React from 'react';
import { StyledMenu, MenuItem as MenuItemStyled, MainLink, SubLink } from './styled';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isActive: !this.state.isActive });
  }
  render() {
    return (
      <MenuItemStyled onClick={this.handleClick}>
        <MainLink to={this.props.to} isSelected={this.state.isActive}>{this.props.text}</MainLink>
        {this.state.isActive && this.props.children}
      </MenuItemStyled>
    );
  }
}

export default () => (
  <StyledMenu>
    <MenuItem to="/" text="Sports">
      <nav>
        <SubLink to="/" isSelected>Shoes</SubLink>
        <SubLink to="/">Clothing</SubLink>
        <SubLink to="/">Accessories</SubLink>
      </nav>
    </MenuItem>
    <MenuItem to="/" text="Brands" />
    <MenuItem to="/" text="Micoach" />
  </StyledMenu>
);
