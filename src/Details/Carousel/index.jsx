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
    this.state = { selectedImages: images[0] };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(id) {
    this.setState({ selectedImages: images.find(el => el.id === id) });
  }

  render() {
    return (
      <div>
        <BigImage src={this.state.selectedImages.x3} />
        <Wrapper>
          {
            images.map(image =>
              (<Item
                img={image.x1}
                key={image.id}
                id={image.id}
                isSelected={this.state.selectedImages.id === image.id}
                click={this.changeImage}
              />))
          }
          <Item>See more photos</Item>
        </Wrapper>
      </div>
    );
  }
}
