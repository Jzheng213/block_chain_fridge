export const fetchUsers = () => {
  return fetch('/api/users').then(res => res.json());
};

export const fetchUser = (id) => {
  return fetch(`api/users/${id}`)
};
