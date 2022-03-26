class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, morning){
    if(morning){
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }

  checkForFood(food){

    var output = ``;
    var menu = this.restaurant.menus[food.type];

    for(var i = 0; i < menu.length; i++){
    // If on the menu, return "Yes, we're serving ${food} today."
      // In other words, for each menu item, if the menu item matches the food the chef is confirming, then let the customer know we are serving the food.
      if(menu[i].name === food.name){
        output = `Yes, we're serving ${food.name} today!`;
        return output;
      }
    }
    // Otherwise, return "Sorry, we aren't serving ${food}today."
    output = `Sorry, we aren't serving ${food.name} today.`;

    return output;
  }
}

module.exports = Chef;