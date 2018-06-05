export const apiQueryBuilder = (url, queryType, filters) => {
  const filterList = [];
  for(i = 2; i < arguments.length; i++){
    if Array.isArray(arguments[i]){
      filterList.push(arguments[i].join('%2C'));
    } else {
      filterList.push(arguments[i]);
    }
  }
  return concat(url,'/',queryType,)
};


'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1'
