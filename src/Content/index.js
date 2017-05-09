import React from 'react';
import Filter from './Filter';
import Card from './Products/Card';
import prod1Img from './Products/Card/prod-1.png';
import prod2Img from './Products/Card/prod-2.png';
import prod3Img from './Products/Card/prod-3.png';

const Content = () => {
  return (
    <div className="content">
      <Filter />
      <div className="products row">
        <Card price="$ 270" img={prod1Img} />
        <Card price="$ 270" img={prod1Img} />
        <Card price="$ 190" img={prod2Img} />
        <Card price="$ 120" img={prod3Img} sale="true" />
        <Card price="$ 270" img={prod1Img} />
        <Card price="$ 120" img={prod3Img} />
        <Card price="$ 190" img={prod2Img} sale="true" />
        <Card price="$ 120" img={prod3Img} sale="true" />
        <Card price="$ 270" img={prod1Img} />
        <Card price="$ 190" img={prod2Img} />
        <Card price="$ 120" img={prod3Img} />
        <Card price="$ 190" img={prod2Img} sale="true" />
      </div>
    </div>
  )
};

export default Content;
