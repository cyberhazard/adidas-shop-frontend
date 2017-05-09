import React from 'react';
import Filter from './Filter';
import Card from './Products/Card';
import prod1Img from './Products/Card/prod-1.png';
import prod2Img from './Products/Card/prod-2.png';
import prod3Img from './Products/Card/prod-3.png';

const generateId = () => Date.now()+'-'+Math.round(Math.random()*10000000);
const generateNumber = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

let products =  new Array(300).fill(0).map(el=>({
  id: generateId(),
  title: '',
  price: `$ ${generateNumber(100,300)}`,
  sale: !Math.round(Math.random()),
  cover: [prod1Img,prod2Img,prod3Img][generateNumber(0,2)],
  images: []
}))

const Content = () => {
  return (
    <div className="content">
      <Filter />
      <div className="products row">
        {
          products.map(product=><Card price={product.price} img={product.cover} key={product.id} sale={product.sale} />)
        }
      </div>
    </div>
  )
};

export default Content;
