import React from 'react';
import { Wrapper, Button, Label } from './styled';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedSize: null };
    this.selectSize = this.selectSize.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.sizes) !== JSON.stringify(nextProps.sizes)) {
      this.setState({ selectedSize: null });
    }
  }

  selectSize(size) {
    if (size === this.state.selectedSize) {
      this.props.onClick();
      this.setState({ selectedSize: null });
    } else {
      this.props.onClick(size);
      this.setState({ selectedSize: size });
    }
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
              onClick={() => this.selectSize(size)}
            >{ size }</Button>))
        }
      </Wrapper>
    );
  }
}
