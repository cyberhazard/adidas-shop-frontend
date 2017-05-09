import React from 'react';

const ProductCard = ({sale, price, img}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="product-card">
        { sale && <span className="product-card__sale">Sale</span> }
        <img className="product-card__photo" src={img} alt="" />
        <a className={`product-card__link ${sale? '' : 'product-card__link_sale' }`} href="#">{price}</a>
      </div>
    </div>
  )
};

export default ProductCard;


