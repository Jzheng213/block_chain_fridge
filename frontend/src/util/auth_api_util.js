import $ from 'jquery';

export const login = (data) => {
  return $.ajax({
    method: 'POST',
    url: '/auth/login',
    data,
  });
};


export const signup = (data) => {
  return $.ajax({
    method: 'POST',
    url: '/auth/signup',
    data,
  });
};

export const logout = () => {
  return $.ajax({
    method: 'POST',
    url: '/auth/logout',
  });
};
