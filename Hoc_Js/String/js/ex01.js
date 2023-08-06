// Chuỗi

// Khai báo chuỗi
var fullName = "1";
console.log(fullName, typeof fullName);
// Kiểm Tra chuỗi
// console.log(typeof fullName);
// if (typeof fullName === "string") {
//     console.log("đây là chuỗi");
// } else {
//     console.log("Không phải chuỗi");
// }

var fullName2 = String("Mai Viet");
console.log(fullName2, typeof fullName2);
var str = "F8 Xin chao F8";
console.log(str.length);
console.log(str.charAt(str.length - 1));
console.log(str.slice(-2));
console.log(str.indexOf("F8"));
console.log(str.lastIndexOf("F8"));
var ex1 = "Hoangan.web@gmail.com";

console.log(ex1.slice(0, ex1.indexOf("@")));
console.log(str.replaceAll("F8", "F88"));
console.log(str.concat("huhu", "haha"));
console.log(str.split(" "));
console.log(str.trim()); /* trimStart/End*/
console.log(str.toLowerCase());
console.log(str.toUpperCase());
var ex2 = "Chào mừng bạn tới F8";
var first = ex2.slice(0, ex2.indexOf(" "));
var middle = ex2.slice(ex2.indexOf(" "), ex2.lastIndexOf(" ") + 1);
var last = ex2.slice(ex2.lastIndexOf(" ") + 1, ex2.length);
var text = last + middle + first;
console.log(text);
