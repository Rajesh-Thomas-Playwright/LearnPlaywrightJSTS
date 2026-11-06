function placeOrder(item, callback) {
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}

function CompleteOrderPrint(){
    console.log("Normal Fn order complete");
}

placeOrder("Burger", CompleteOrderPrint);


placeOrder("Burger", function(){
    console.log("Order is ready!, pick it up")
})

placeOrder("Burger", ()=>{
    console.log("Arrow Function, I am also a function with callback")
})