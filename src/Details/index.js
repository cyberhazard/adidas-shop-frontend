import React from 'react';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import bigImage from './big-image.png';
import Previews from './Previews';
import Description from './Description';

const Details = () => {
  return (
    <div className="content">
      <div className="order">
        <div className="order__details-top">
          <TopLeft />
          <TopRight />
          <img className="order__big-image" src={bigImage} alt="" />
        </div>
        <Previews />
        <Description />
      </div>
      <button className="order__button">Buy Now</button>
    </div>
  )
};

export default Details;
