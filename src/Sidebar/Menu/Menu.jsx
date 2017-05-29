import React from 'react';
import { Button, Item } from './styled';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Item>
        <Button
          onClick={this.handleClick}
          isOpen={this.state.isOpen}
        >{this.props.title}</Button>
        {this.state.isOpen && this.props.children}
      </Item>
    );
  }
}
