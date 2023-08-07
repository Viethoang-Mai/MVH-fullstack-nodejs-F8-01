/*Bài 01
Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí*/
var arr = [0, 1, 7, 100000, 2, 3, 4, 9];
if (arr.length !== 0) {
    var maxNumber = arr[0],
        minNumber = arr[0],
        indexMax = 0,
        indexMin = 0;

    for (var i = 0; i <= arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i];
            indexMax = i;
        }
        if (minNumber > arr[i]) {
            minNumber = arr[i];
            indexMin = i;
        }
    }
    console.log(
        `Số lớn nhất trong mảng là ${maxNumber}  vị trí thứ ${indexMax}`
    );
    console.log(
        `Số nhỏ nhất trong mảng là ${minNumber} vị trí thứ ${indexMin}`
    );
} else console.log(`Mảng rỗng`);

/*Bài 02
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”*/
var isPrime = function (number) {
    if (number <= 1 || number % 1 !== 0) return false;
    for (var i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
};
var sumPrime = 0,
    cnt = 0,
    check = 0;
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
if (arr.length !== 0) {
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            sumPrime += arr[i];
            cnt++;
            check = 1;
        }
    }
    if (check) {
        var average = sumPrime / cnt;

        console.log(`Tbc các số ngto là = ${average}`);
    } else {
        console.log(`Mảng không có số nguyên tố nào.`);
    }
} else console.log(`Mảng rỗng`);

/*Bài 03
Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý*/
var arr = [1, 1, 2, 3, 55];
var newArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(newArr);

/*Bài 04
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

Sắp xếp mảng theo thứ tự tăng dần

Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng*/
var arr = [1, 3, 20, 5, 4];
var element = 100000000;
arr.push(element);
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
