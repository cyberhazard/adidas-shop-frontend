import React from 'react';
import Colors from './../Colors';

const TopRight = () => {
  return (
    <div className="order__top-right">
      <section className="order__sale-wrap">
        <span className="order__sale">Sale</span>
        <Colors />
      </section>
      <h2 className="order__price">170$</h2>
    </div>
  )
};

export default TopRight;
