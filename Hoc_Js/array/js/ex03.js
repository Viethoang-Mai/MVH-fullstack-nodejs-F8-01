var users = [[`An `, `Tuấn`], `Dũng`, `Yến`];
console.log(users);
//1 fill() Cập nhật tất cả các phần tử thành 1 giá trị
// user.fill(`F8`);
//2 duyệt từng phần tử của mảng và trả về element và index(Trong callback). Hàm này sẽ không có gtri trả về, Không dừng được
users.forEach(function (user, index) {
    console.log(user, index);
});
// 3 Map(callback)
/* Trả về một mảng mới*/
// var newArr = users.map(function (user, index) {
//     console.log(user, index);
//     return `<h3>${index + 1} - ${user}</h3>`;
// });
// console.log(newArr);
// var html = newArr.join(" ");
// document.write(html);
/* 4 Some()
-trả về true/false 
- trả về true nếu 1 lần lặp có giá trị callback là true

*/
// var numbers = [1, 2, 3, 4, 5];
// var check = numbers.some(function (number) {
//     console.log(number);
//     return number % 2 === 0;
// });
// console.log(check);

/* 5 every()
-trả về true/false 
- trả về true nếu tất cả phần tử có return true
- trả về false 

*/
var numbers = [1, 1, 3, 2, 5];
var check = numbers.every(function (number) {
    // console.log(number);
    return number % 2 !== 0;
});
console.log(check);
/* 6 filter()
-trả về 1 mảng
- số lượng phần tử của mảng mới phụ thuộc vào return true của từng phần tử trong mảng ban đầu
*/
var customers = [
    `Luu Anh Quan`,
    `do ha chi`,
    `Mai Viet Hoang`,
    `Nguyen Xuan Tuan Anh`,
];
var keyword = "Hoang";
var check = customers.filter(function (user) {
    return user.toLowerCase().includes(keyword.toLowerCase());
});
console.log(check);
/* 7 find()
-trả về 1 phần tử true đầu tiên
- 
*/
var customers = [
    `Luu Anh Quan`,
    `do ha chi`,
    `Mai Viet Hoang`,
    `Nguyen Xuan Tuan Anh`,
];
var keyword = "n";
var check = customers.find(function (user) {
    return user.toLowerCase().includes(keyword.toLowerCase());
});
console.log(check);
/* 7 findLast()
-trả về 1 phần tử true cuối cùng của mảng
- 
*/
var customers = [
    `Luu Anh Quan`,
    `do ha chi`,
    `Mai Viet Hoang`,
    `Nguyen Xuan Tuan Anh`,
];
var keyword = "n";
var check = customers.findLast(function (user) {
    return user.toLowerCase().includes(keyword.toLowerCase());
});
console.log(check);
/* 8 findindex()
-trả về 1 index true đầu tiên mảng
- 
*/
// var customers = [
//     `Luu Anh Quan`,
//     `do ha chi`,
//     `Mai Viet Hoang`,
//     `Nguyen Xuan Tuan Anh`,
// ];
// var keyword = "c";
// var check = customers.findIndex(function (user) {
//     return user.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(check);
/* 8 findindex()
-trả về 1 index true cuối mảng
- 
*/
// var customers = [
//     `Luu Anh Quan`,
//     `do ha chi`,
//     `Mai Viet Hoang`,
//     `Nguyen Xuan Tuan Anh`,
// ];
// var keyword = "h";
// var check = customers.findLastIndex(function (user) {
//     return user.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(check);
