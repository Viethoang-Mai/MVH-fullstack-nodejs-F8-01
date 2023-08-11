/*Bài 01
Lấy kết quả giao giữa 2 mảng*/
var arrA = [1, 4, 6, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var check = arrA.reduce(function (prev, current) {
    if (arrB.includes(current)) {
        prev.push(current);
    }
    return prev;
}, []);
console.log(check.sort());

/*Bài 02
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”*/
var flatten = function (arr) {
    return arr.reduce(function (prev, curr) {
        return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, []);
};
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(flatten(arr));

/*Bài 03
Tách phần tử trong mảng theo đúng kiểu dữ liệu*/
var arr = [
    ["a", 1, 1000, true],
    [2000, "Vedi", "b", 2, false],
];
var flatten = function (arr) {
    return arr.reduce(function (prev, curr) {
        return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, []);
};

var arr1 = flatten(arr);
var res = [];
var arrNum = [];
var arrStr = [];
var arrBoolean = [];
var arrOj = [];

arr1.forEach(function (element) {
    if (typeof element === "string") {
        arrStr.push(element);
    }
    if (typeof element === "boolean") {
        arrBoolean.push(element);
    }
    if (typeof element === "number") {
        arrNum.push(element);
    }
});
res.push(arrStr, arrNum, arrBoolean);
console.log(res);

/*Bài 04
Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện*/
var data = [
    {
        heading: "Tiêu đề bài viết 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "./assets/img/img.jpg",
    },
    {
        heading: "Tiêu đề bài viết 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "./assets/img/img.jpg",
    },
    {
        heading: "Tiêu đề bài viết 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "./assets/img/img.jpg",
    },
    {
        heading: "Tiêu đề bài viết 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "./assets/img/img.jpg",
    },
];
function render(data) {
    for (var index in data) {
        if (index % 2 === 0)
            document.write(
                `<div class="item">
                    <img src="${data[index].img}"  class="img" />
                    <div class="item-info">
                        <h2 class="item-heading">${data[index].heading}</h2>
                        <p class="item-desc">
                        ${data[index].desc}
                        </p>
                    </div>
                </div>`
            );
        else {
            document.write(
                `<div class="item">
                    <div class="item-info">
                        <h2 class="item-heading">${data[index].heading}</h2>
                        <p class="itrm-desc">
                        ${data[index].desc}
                        </p>
                    </div>
                    <img src="${data[index].img}"  class="img" />
                </div>`
            );
        }
    }
}

render(data);
