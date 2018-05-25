export const asArray = (obj) => {
  return Object.keys(obj).map(key => obj[key]);
};
