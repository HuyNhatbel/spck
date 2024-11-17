"B1"
function tinh_tong(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(tinh_tong(3));

"B2"
function la_so_nguyen_to(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let num = 3;
console.log(num + (la_so_nguyen_to(num) ? " là số nguyên tố." : " không phải là số nguyên tố."));

"B3"
function tinh_giai_thua(n) {
    if (n == 0 || n == 1) return 1;
    let giai_thua = 1;
    for (let i = 2; i <= n; i++) {
        giai_thua *= i;
    }
    return giai_thua;
}

console.log(tinh_giai_thua(5));

"B4"
function chuyen_doi_nhiet_do(value, type) {
    if (type === "CtoF") {
        return (value * 9/5) + 32;
    } else if (type === "FtoC") {
        return (value - 32) * 5/9;
    } else {
        return "Loại chuyển đổi không hợp lệ";
    }
}

console.log(chuyen_doi_nhiet_do(25, "CtoF"));