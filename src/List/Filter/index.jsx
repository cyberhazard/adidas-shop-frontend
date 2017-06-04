import React from 'react';
import { Wrapper, Image, Button, Label, Sizes } from './styled';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.selectSize = this.selectSize.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.sizes) !== JSON.stringify(nextProps.sizes)) {
      this.setState({ selectedIndex: 0 });
    }
  }

  selectSize(size, selectedIndex) {
    this.props.onClick(size);
    this.setState({ selectedIndex });
  }

  render() {
    const sizes = ['All', ...this.props.sizes];
    return (
      <Wrapper>
        <Image src={require('./filter.png')} />
        <div>
          <Button isSelected>Man</Button>
          <Button>Woman</Button>
        </div>
        <Sizes>
          <Label>Size</Label>
          {
            sizes.map((size, index) =>
              (<Button
                mini
                isSelected={index === this.state.selectedIndex}
                onClick={() => this.selectSize(size, index)}
              >{ size }</Button>))
          }
        </Sizes>
      </Wrapper>
    );
  }
}
