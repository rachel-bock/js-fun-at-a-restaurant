function nameMenuItem(item) {
  return `Delicious ${item}`;
}

function createMenuItem(name, price, type){
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(ingredient, ingredients){

  //If an ingredient exists in the array, do nothing.
  if (ingredients.includes(ingredient)) {
    return ingredients;
  // Otherwise, add the ingredient to the array.
  } else {
    ingredients.push(ingredient);
  }
}

function formatPrice(initialPrice){
    return `$${initialPrice}`;
}

function decreasePrice(price){
    return price * .9;
}

function createRecipe(title, ingredients, menuItemType){
  return {
      title: title,
      ingredients: ingredients,
      type: menuItemType,
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
