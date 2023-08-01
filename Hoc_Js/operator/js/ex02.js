var month = "2",
    year = "2016";
if (month % 1 == 0 && year % 1 == 0 && month >= 1 && month <= 12) {
    month = +month;
    year = +year;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(`Thang co 31 ngay `);
            break;
        case 4:
        case 6:
        case 11:
            console.log(`Thang co 30 ngay`);
            break;
        case 2:
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                console.log(`Thang co 29 ngày`);
            } else {
                console.log(`Thang co 28 ngày`);
            }
            break;
        default:
            console.log(`Nhap lai thang`);
    }
} else {
    console.log(`Nhap lai thang hoac nam`);
}
// if (action === "create" || action === "add" || action === "insert") {
//     console.log(`Thêm`);
// } else if (action === "delete" || action === "remove" || action === "destroy") {
//     console.log(`Xóa`);
// } else if (action === "edit" || action === "update") {
//     console.log(`Sửa`);
// } else {
//     console.log(`Danh sách`);
// }
var n = 5,
    res = 1,
    sum = 0;

for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; i++) {
        res *= i;
    }
    sum += res;
}
console.log(sum);
