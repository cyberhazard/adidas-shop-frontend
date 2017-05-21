import React from 'react';
import { MainLink, MenuItem as MenuItemStyled } from './styled';

export default class MenuItem extends React.Component {
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
        <MainLink to={this.props.to} isSelected={this.state.isActive}>{this.props.title}</MainLink>
        {this.state.isActive && this.props.children}
      </MenuItemStyled>
    );
  }
}
