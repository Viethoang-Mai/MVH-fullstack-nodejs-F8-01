/* 
BT1: Hoán vị 2 số
Input: Cho trước 2 số a, b
Output: Thực hiện hoán vị 2 số không dùng biến trung gian */
var a = 4,
    b = 3;
a += b;
b = a - b;
a = a - b;
console.log(`Hai số đã được hoán vị: a = ${a}, b = ${b}`);

// ===============================================================

//BT2: Viết chương trình tính toán biểu thức sau
var res = 10 + 20 + 5 ** 10 / 2;
console.log(`res = ${res}`);

// ===============================================================

/* BT3: Tìm số lớn nhất
Input:
Cho trước 3 số a, b, c
Output:
Tìm số lớn nhất trong 3 số và hiển thị kết quả */
var a = 4,
    b = 3,
    c = 900000000000000,
    max = a;
if (b > a) max = b;
if (c > b) max = c;
console.log(`Max = ${max}`);

// ===============================================================

/*BT4: Kiểm tra số cùng dấu
Cho trước 2 số a, b
Output:
Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình*/
var a = 4,
    b = -3;
if (a * b >= 0) console.log(`a va b cùng dấu`);
else console.log(`a va b trái dấu`);

// ===============================================================

/* BT5: Sắp xếp 3 số
Input:
Cho trước 3 số a, b, c
Output:
Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần */
var a = 3,
    b = 2,
    c = 1,
    tg;
if (a >= b) {
    tg = a; /* tg = a = 3;*/
    a = b; /* a = b = 2;*/
    b = tg; /*  b = tg = 3;*/
}
if (a >= c) {
    tg = a; /* tg = a = 2;*/
    a = c; /* a = c = 1;*/
    c = tg; /* c = tg = 2;*/
}
if (b >= c) {
    tg = b; /* tg = b = 3;*/
    b = c; /* b = c = 2;*/
    c = tg; /* c = tg = 3;*/
}
// => a = 1, b = 2, c = 3;.

console.log(`Dãy số được sắp xếp lại thành: ${a}, ${b}, ${c}`);
