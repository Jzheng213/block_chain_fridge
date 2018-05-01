export const asArray = (obj) => {
  const objArr = Object.keys(obj).map(key => obj[key]);
  return objArr.reverse();
};
