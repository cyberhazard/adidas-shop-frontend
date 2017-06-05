export const get = (group, type, id = '') =>
  fetch(`https://erodionov-adidas-fake-api.now.sh/v1/products/${group}/${type}/${id}`)
    .then(r => r.json());

export const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r => r.json());
