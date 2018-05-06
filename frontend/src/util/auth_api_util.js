
export const login = (data) => {
  return fetch('/auth/login', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
  }).then(res => res.json());
};

export const signup = (data) => {
  return fetch('/auth/signup', {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
  }).then(res => res.json());
};
