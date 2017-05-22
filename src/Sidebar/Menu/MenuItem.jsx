import React from 'react';
import { MainLink, MenuItem as MenuItemStyled } from './styled';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
  }

  render() {
    return (
      <MenuItemStyled >
        <MainLink
          onClick={this.handleClick}
          isSelected={this.state.isSelected}
        >{this.props.title}</MainLink>
        {this.state.isSelected && this.props.children}
      </MenuItemStyled>
    );
  }
}
