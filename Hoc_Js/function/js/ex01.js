function getMsg() {
    console.log(`Xin chao F8`);
}
getMsg();
function getMassage(msg, type = "success") {
    console.log(`Xin chao ${msg}`);
    console.log(`Type ${type}`);
}
function getTotal(a, b) {
    var s = a + b;
    if (b !== 0) {
        return s;
    }
    return `Khong the tinh toan duoc`;
}
var res = getTotal(4, 0);
console.log(`res: ${res}`);
var msg = "hihi";
function gettest() {
    return msg;
}
console.log(gettest());
settest("haha");
function settest(value) {
    msg = value;
}
console.log(gettest());
