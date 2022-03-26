//order.js

function takeOrder(newOrder, orders){

  if (orders.length < 3){
    return orders.push(newOrder);
  } else {
    console.log("3 orders exist already.")
  }
}

function refundOrder(orderNum, orders){
  // should remove an order by order number.
  
  // output should be the orders array with the order 
  // removed if the order was originally in the orders 
  // array.

  for(var i=0; i<orders.length; i++){
    if (orders[i].orderNumber === orderNum ) {
      orders.splice(i, 1);  
    }
  }
}

function listItems(deliveries){
  var output = '';

  for(var i=0; i<deliveries.length; i++){
    if(i === 0){
      output = deliveries[i].item;
    } else {
      output = output + ", " + deliveries[i].item;
    }
  }
    return output;
}

function searchOrder(orders, order){
  var output; // should be a boolean

  for(var i=0; i<orders.length; i++){
    if (orders[i].item === order) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
