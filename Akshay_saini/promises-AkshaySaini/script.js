// EPISODE -1
//{ const GITHUB_API = "https://api.github.com/users/Shyam3050"

// const user = fetch(GITHUB_API)
// // console.log(user)

// user.then((data) => data.json()).then(data => console.log(data))}

const cart = ["pant", "kurta", "shirt", "lungi"];
// const cart = []

// EPISODE - 2

const createOrder = (cart) => {
  const pr = new Promise((resolve, reject) => {
    if (!cart.length) {
      const err = new Error("cart is empty");
      reject(err);
    }
    const orderid = "jsdkf849749kd843jg9";
    setTimeout(() => {
      resolve(orderid);
    }, 5000);
  });
  return pr;
};

const proceedToPayment = (orderid) => {
  return new Promise((resolve, reject) =>
    resolve(`${orderid} payment successfull`)
  );
};
createOrder(cart)
  .then((orderid) => {
    console.log(orderid);
    return orderid;
  })
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log(err));
