/* 
BT1: Tính tiền cước taxi dựa vào các điều kiện sau
Số km ≤ 1 giá 15000đ
1 < số km ≤ 5 giá 13500đ
Số km > 5 giá 11000đ
Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền */

var kc = 1,
    length1 = 15000,
    length2 = 13500,
    length3 = 11000;
kc = +kc;
if (kc > 0) {
    if (kc <= 1) {
        res = kc * 15000 + "đ";
    } else if (kc <= 5) {
        res = length1 + (kc - 1) * length2 + "đ";
    } else {
        res = length1 + 4 * length2 + (kc - 4) * length3 + "đ";
        if (kc > 120) {
            res = res - res * 0.1 + "đ";
        }
    }
    console.log(`Số tiền phải trả cho ${kc}km là: ${res}`);
} else console.log(`Nhập lại n !!!`);

// ===============================================================

/*BT2: Tính tiền điện
Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau

Input: Số điện tiêu thụ hàng tháng

Output: Hiển thị số tiền phải đóng */
var number = 101,
    sum,
    kwh0 = 1678,
    kwh51 = 1734,
    kwh101 = 2014,
    kwh201 = 2536,
    kwh301 = 2834,
    kwh401 = 2927;

if (number <= 0) {
    console.log("Không dùng điện mà ktra ???");
} else {
    if (number <= 50) {
        sum = number * kwh0;
    } else if (number <= 100) {
        sum = 50 * kwh0 + (number - 50) * kwh51;
    } else if (number <= 200) {
        sum = 50 * kwh0 + 50 * kwh51 + (number - 100) * kwh101;
    } else if (number <= 300) {
        sum = 50 * kwh0 + 50 * kwh51 + 100 * kwh101 + (number - 200) * kwh201;
    } else if (number <= 400) {
        sum =
            50 * kwh0 +
            50 * kwh51 +
            100 * kwh101 +
            100 * kwh201 +
            (number - 300) * kwh301;
    } else {
        sum =
            50 * kwh0 +
            50 * kwh51 +
            100 * kwh101 +
            100 * kwh201 +
            100 * kwh301 +
            (number - 400) * kwh401;
    }
    console.log(`Tiền điện phải đóng cho ${number} số điện là ${sum}đ`);
}

// ===============================================================

/* BT3: Tính giá trị biểu thức
Cho trước số nguyên n. Tính giá trị biểu thức sau

S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)*/
function calcSum(number) {
    if (number % 1 !== 0 && number < 0) return "Xin nhập lại";
    var sum = 0;
    for (var i = 1; i <= number; i++) {
        sum += i * (i + 1);
    }
    return sum;
}
console.log(calcSum(3));

// ===============================================================

/*BT4: Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?

Hàm có 1 tham số là số cần kiểm tra
Hàm có giá trị trả về
Gọi hàm trong câu điều kiện if else*/
function primeNumber(n) {
    if (n <= 1 || n % 1 !== 0) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        break;
    }
    return true;
}
var n = 0;
if (primeNumber(n)) {
    console.log(`Số ${n} là số nguyên tố`);
} else {
    console.log(` Số ${n} không phải số nguyên tố`);
}

// ===============================================================

/* BT5: Vẽ tam giác số
Vẽ tam giác số sau với N dòng

1

2 3

4 5 6

7 8 9 10

11 12 13 14 15*/
document.writeln("Bài tập 5 <br/>");
var n = 5,
    number = 0,
    begin = 1;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        number += begin;
        document.write(number + " ");
    }
    document.writeln("<br/>");
    document.writeln("<br/>");
}
/* BT6: Vẽ bàn cờ vua
Học viên sử dụng kiến thức đã học về vòng lặp, câu lệnh rẽ nhánh để vẽ bàn cờ vua*/
document.write(`Bài tập 6 <br/> <br/>`);
function chessBoard(N) {
    for (var i = 1; i <= N; i++) {
        for (var j = 1; j <= N; j++) {
            if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
                document.writeln(
                    `<span style =" width: 30px; height: 30px;display: inline-block; border: 1px solid #000; background: #ccc"></span>`
                );
            } else {
                document.writeln(
                    `<span style =" width: 30px; height: 30px;display: inline-block; border: 1px solid #000; background: #000;"></span>`
                );
            }
        }
        document.write("<br/>");
    }
}
chessBoard(8);
document.write("<br/>");

/* BT7: Vẽ bảng cửu chương
Học viên sử dụng kiến thức đã học để vẽ bảng cửu chương từ 1 đến 10*/
document.write(`Bài tập 7 <br/> <br/>`);
function multiplicationTable(N) {
    for (var i = 2; i <= N; i++) {
        for (var j = 1; j <= 10; j++) {
            var res = i * j;
            document.write(
                `<span style ="width:100px;  height: 30px;display: inline-block; border: 1px solid #000; background:orange; text-align: center ;line-height: 30px;;">${i} x ${j} = ${res} </span> `
            );
        }
        document.write("<br/>");
    }
}
multiplicationTable(8);

/* BT8:Tính giá trị biểu thức không dùng vòng lặp
Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N */
function Res(n) {
    if (n % 1 !== 0 || n === 0) {
        return "Nhap lai n";
    }
    if (n === 1) {
        return 1;
    } else {
        return Res(n - 1) + 1 / n;
    }
}

console.log(Res(2));
