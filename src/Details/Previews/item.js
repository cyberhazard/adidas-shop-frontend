import React from 'react';

const Item = ({img}) => {
  return (
    <button className="previews__item">
      <img src={img} alt="" />
    </button>
  )
};

export default Item;
