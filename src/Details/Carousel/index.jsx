import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BigImage = styled.img`
  display: block;
  max-width: 70%;
  max-height: 500px;
  margin: 0 auto;
`;

const generateId = () => `${Date.now()}-${Math.round(Math.random() * 10000000)}`;

const images = [
  {
    id: generateId(),
    x1: require('./../../assets/images/img-1.png'),
    x2: require('./../../assets/images/img-1@2x.png'),
    x3: require('./../../assets/images/img-1@3x.png'),
  },
  {
    id: generateId(),
    x1: require('./../../assets/images/img-2.png'),
    x2: require('./../../assets/images/img-2@2x.png'),
    x3: require('./../../assets/images/img-2@3x.png'),
  },
  {
    id: generateId(),
    x1: require('./../../assets/images/img-3.png'),
    x2: require('./../../assets/images/img-3@2x.png'),
    x3: require('./../../assets/images/img-3@3x.png'),
  },
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <div>
        <BigImage src={images[this.state.selectedIndex].x3} />
        <Wrapper>
          {
            images.map((image, index) =>
              (<Item
                img={image.x1}
                key={image.id}
                index={index}
                isSelected={this.state.selectedIndex === index}
                click={this.changeImage}
              />))
          }
          <Item>See more photos</Item>
        </Wrapper>
      </div>
    );
  }
}
