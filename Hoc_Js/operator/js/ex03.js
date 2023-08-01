var n = 5,
    a = true;
if (n <= 1) a = false;
else {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            a = false;
            i = n;
        }
    }
    if (a) console.log(`so nguyen to`);
    else {
        console.log(`khong phai so nguyen to`);
    }
}
