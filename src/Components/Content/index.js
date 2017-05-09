import React from 'react';
import Filter from './Filter';
import ProducCard from './Products/ProductCard';
import prod1Img from './Products/ProductCard/prod-1.png';
import prod2Img from './Products/ProductCard/prod-2.png';
import prod3Img from './Products/ProductCard/prod-3.png';

const Content = () => {
  return (
    <div className="content">
      <Filter />
      <div className="products row">
        <ProducCard price="$ 270" img={prod1Img} />
        <ProducCard price="$ 270" img={prod1Img} />
        <ProducCard price="$ 190" img={prod2Img} />
        <ProducCard price="$ 120" img={prod3Img} sale="true" />
        <ProducCard price="$ 270" img={prod1Img} />
        <ProducCard price="$ 120" img={prod3Img} />
        <ProducCard price="$ 190" img={prod2Img} sale="true" />
        <ProducCard price="$ 120" img={prod3Img} sale="true" />
        <ProducCard price="$ 270" img={prod1Img} />
        <ProducCard price="$ 190" img={prod2Img} />
        <ProducCard price="$ 120" img={prod3Img} />
        <ProducCard price="$ 190" img={prod2Img} sale="true" />
      </div>
    </div>
  )
};

export default Content;
