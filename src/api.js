export const get = path =>
  fetch(`https://erodionov-adidas-fake-api.now.sh/${path}`)
    .then(r => r.json());

export const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r => r.json());
