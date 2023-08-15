/*Bài 01*/
var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

function getError(field) {
    for (var key in errors[field]) {
        console.log(errors[field][key]);
        return;
    }
}

getError("name");

/*Bài 02
 */
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

function createCustomers(customers) {
    return customers
        .map(function (customer) {
            var firstName = customer.name.slice(
                customer.name.lastIndexOf(" "),
                customer.name.length
            );
            // console.log(firstName);
            var lastName = customer.name.slice(0, customer.name.indexOf(" "));
            // console.log(lastName);
            var newCustomer = new Person(
                customer.name,
                customer.age,
                customer.address
            );
            newCustomer.shortName = `${lastName} ${firstName}`;
            return newCustomer;
        })
        .sort(function (next, prev) {
            return next.age - prev.age;
        });
}
const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
const result = createCustomers(customers);
console.log(result);

/*Bài 03*/
function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}
