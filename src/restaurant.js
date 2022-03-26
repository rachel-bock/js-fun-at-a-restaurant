function createRestaurant(restaurantName){
  return {
    name: restaurantName,
    menus: {
      breakfast: [], 
      lunch: [], 
      dinner: []
    }, 
  }
}

function addMenuItem(restaurant, menuItem){
  
  var menuType = menuItem.type;
  var menu = restaurant.menus[menuType];

  // for every menuItem in the menuType array,
  // check if the menu item already exists in the array.
  for(var i = 0; i < menu.length; i++){
    if(menuItem === menu[i]){
    // If the item already exists, do nothing.  
      return restaurant;
    }
  }

  // Otherwise, add the item to the menu.
  menu.push(menuItem);

  return restaurant;
}

function removeMenuItem(restaurant, menuItem, menuType){
  // If the menu item exists in the menu, remove it.
  
  // declare variables.
  var menu = restaurant.menus[menuType];

  // for every menuItem in the menuType menu,
  // check if the menu item already exists in the array.
  for(var i = 0; i < menu.length; i++){
    if(menuItem === menu[i].name){
    // If the item already exists, splice it from the menu array.
      menu.splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
    }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}