import React from 'react';
import { Wrapper, Button, Label } from './styled';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedSize: null };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.sizes) !== JSON.stringify(nextProps.sizes)) {
      this.setState({ selectedSize: null });
    }
  }

  handleFilterChange(size) {
    const selectedSize = size === this.state.selectedSize ? null : size;
    this.props.onClick(selectedSize);
    this.setState({ selectedSize });
  }

  render() {
    return (
      <Wrapper>
        <Label>Size</Label>
        {
          this.props.sizes.map(size =>
            (<Button
              mini
              isSelected={size === this.state.selectedSize}
              onClick={() => this.handleFilterChange(size)}
            >{ size }</Button>))
        }
      </Wrapper>
    );
  }
}
