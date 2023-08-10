/* Hàm reduce(callback,initialValue)
- callback: Hàm có*/
// var numbers = [1, 2, 3, 4, 5];
// var result = numbers.reduce(function (prev, current) {
//     console.log(`Prev:${prev}`, `Current:${current}`);
//     return prev + current;
// }, 0);
// console.log(result);
// var numbers = [1, 2, 100, 3, 4, 5];
// var result = numbers.reduce(function (prev, current) {
//     if (prev < current) {
//         return current;
//     }
//     return prev;
// });
// console.log(result);
// var arr1 = [1, 5, 2, 9];
// var arr2 = [1, 3, 2];
// var diff = arr1.reduce(function (prev, current) {
//     if (!arr2.includes(current)) {
//         prev.push(current);
//     }
//     return prev;
// }, []);
// console.log(diff);
var pElement = document.getElementsByTagName("p");
Array.from(pElement).forEach(function (item) {
    console.log(item);
});
// Sao chép mảng
var a = ["Hoàng An", 31];
b = a.map(function (item) {
    return item;
});
b[0] = "Hoàng An F8";
console.log(a, b);
