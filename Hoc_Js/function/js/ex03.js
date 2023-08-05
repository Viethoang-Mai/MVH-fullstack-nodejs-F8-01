// Ham con Closure
// var getMassage = function () {
//     var display = function () {
//         console.log(`Viet Hoang`);
//     };
//     display();
// };
// getMassage();
// var Closure = function (a) {
//     return function (b) {
//         return a + b;
//     };
// };
// var add = Closure(10);
// console.log(add);
function calcSum(n) {
    if (n === 1) {
        return 1;
    }
    return n + calcSum(n - 1);
}
console.log(calcSum(10));
