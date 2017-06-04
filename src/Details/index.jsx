import React from 'react';
import { Wrapper, ProductInfo } from './styled';
import BuyButton from './BuyButton';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import Carousel from './Carousel';
import Description from './Description';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '', item: {} };
    this.changeColor = this.changeColor.bind(this);
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps);
  }

  load(props) {
    const { group, type, id } = props.match.params;
    const FETCH_URL = `https://erodionov-adidas-fake-api.now.sh/v1/products/${group}/${type}/${id}`;
    fetch(FETCH_URL)
      .then(r => r.json())
      .then(item => this.setState({ item }));
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Wrapper>
        <ProductInfo>
          <TopLeft
            color={this.state.color}
            title={this.state.item.title}
          />
          <TopRight
            setColor={this.changeColor}
            color={this.state.color}
            price={this.state.item.price}
          />
          <Carousel images={this.state.item.images} />
          <Description text={this.state.item.description} />
        </ProductInfo>
        <BuyButton />
      </Wrapper>
    );
  }
}
