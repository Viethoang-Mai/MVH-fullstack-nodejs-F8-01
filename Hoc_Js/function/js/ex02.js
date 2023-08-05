var getA = function (fn, ...args) {
    setTimeout(function () {
        console.log("getA");
        if (typeof fn === "function") {
            fn(...args);
        }
    }, 1000);
};
var getB = function () {
    console.log(`getB`);
};

var getC = function () {
    console.log(`getC`);
};
var getD = function (text, number) {
    console.log(`getD ` + text + number);
};
getA(getB);
getA(getC);
// getA(function () {
//     getD("Hoang Mai");
// });
getA(getD, "F8", " VietHoang");
// Rest parameter
// var sum = function (smd, ...args) {
//     console.log(args);
// };
// sum(3, 5, 4, 4);
