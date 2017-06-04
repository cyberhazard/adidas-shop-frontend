import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import media from './../../media';
import { makeImageLink } from './../../helpers';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BigImage = styled.img`
  display: block;
  max-width: 70%;
  max-height: 500px;
  margin: 0 auto;
  ${media.tablet`max-width: 90%;`}
`;

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
    const { id, fileName } = this.props.images
      ? this.props.images[this.state.selectedIndex]
      : { id: 0, fileName: '' };
    const bigImage = makeImageLink(id, fileName, 800);
    return (
      <div>
        <BigImage src={bigImage} />
        <Wrapper>
          {
            this.props.images && this.props.images.map((image, index) =>
              (<Item
                img={makeImageLink(image.id, image.fileName, 240)}
                key={image.id}
                index={index}
                isSelected={this.state.selectedIndex === index}
                click={this.changeImage}
              />))
          }
        </Wrapper>
      </div>
    );
  }
}
