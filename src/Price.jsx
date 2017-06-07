import React from 'react';

export default ({ currency, children }) => {
  const price = children / 100;
  const currencies = {
    RUB: `${price}₽`,
    EUR: `€${price}`,
    USD: `$${price}`,
  };
  return <span>{currencies[currency]}</span>;
};
