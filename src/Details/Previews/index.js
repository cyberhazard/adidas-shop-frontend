import React from 'react';
import Item from './item';
import prevImg1 from './preview-1.png';
import prevImg2 from './preview-2.png';
import prevImg3 from './preview-3.png';

const Previews = () => {
  return (
    <div className="previews">
      <Item img={prevImg1} />
      <Item img={prevImg2} />
      <Item img={prevImg3} />
      <Item img={prevImg1} />
      <Item img={prevImg2} />
      <div className="previews__item previews__show-more">Show more photos</div>
    </div>
  )
}

export default Previews;
