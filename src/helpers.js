export const makeImageLink = (id, fileName, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

export const generateId = () => `${Date.now()}-${Math.round(Math.random() * 10000000)}`;
