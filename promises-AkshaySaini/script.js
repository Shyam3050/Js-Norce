const cart = ["pant", "kurta","shirt","lungi"]

// createOrder(cart); // return orderId

// proceedTopayment(orderId)

function x (fn){
    // fn();
    return fn;
}
 const y = x(function (){

    console.log("anonymous rendered")
    return 1;
})
console.log(y())