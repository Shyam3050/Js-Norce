// Debouncing
let count = 0;
const getData = () => {
  // call an api and get data
  console.log("Fetching Data", count++);
};

function debounce(fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn().apply(context, args);
      console.log("timer of dosomemagic");
    }, d);
  };
}
const betterFunction = debounce(getData, 300);

// we can implement like this also
// let timer;
// const betterFunction = function () {
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     getData();
//     console.log("timer of dosomemagic");
//   }, 300);
// };

// implemented me  cleartimeout

// let timer;
// function x() {
//   console.log(timer);
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     console.log("settimeout");
//   }, 300);
// }
// x();
// x();
// x();
// x();
