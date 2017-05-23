import React from 'react';
import { Button, Item } from './styled';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Item>
        <Button
          onClick={this.handleClick}
          isOpened={this.state.isOpened}
        >{this.props.title}</Button>
        {this.state.isOpened && this.props.children}
      </Item>
    );
  }
}
