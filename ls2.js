"Toán Tử Gán"
// let a = 1;
let b = 2;

a += b; // a = a + b
a -= b; // a = a - b
a *= b; // a = a * b
a /= b; // a = a / b
a %= b; // a = a % b
a++;    // a = a + 1
a--;    // a = a - 1
"Toán Tử So Sánh"
a > b;    // a lớn hơn b
a < b;    // a nhỏ hơn b
a == b;   // a bằng b
a >= b;   // a lớn hơn hoặc bằng b
a <= b;   // a nhỏ hơn hoặc bằng b
a != b;   // a khác b
a === b;  // a bằng b và cùng kiểu dữ liệu
a !== b;  // a khác b hoặc khác kiểu dữ liệu
"Toán Tử Logic"
// Và: && (cả 2 điều kiện true thì kết quả là true)
true && true;    // true
true && false;   // false

// Hoặc: || (1 điều kiện true thì kết quả là true)
true || false;   // true
false || false;  // false

// Không: ! (đảo ngược giá trị boolean)
!true;           // false
!false;          // true
"Điều Kiện Rẽ Nhánh"
let a = 5;
if (a > b) {
    console.log("a lớn hơn b");
} else {
    console.log("a nhỏ hơn hoặc bằng b");
}

// Kiểm tra số chẵn lẻ
if (a % 2 == 0) {
    console.log("a là số chẵn");
} else {
    console.log("a là số lẻ");
}

// Kiểm tra chia hết
let x = 8;
if (x % 3 == 0) {
    console.log("x chia hết cho 3");
} else if (x % 3 == 1) {
    console.log("x chia 3 dư 1");
} else {
    console.log("x chia 3 dư 2");
}

// Kiểm tra mùa
let season = "spring";
if (season == "spring") {
    console.log("mát");
} else if (season == "summer") {
    console.log("nóng");
} else if (season == "autumn") {
    console.log("lạnh");
} else if (season == "winter") {
    console.log("đông");
} else {
    console.log("không phải mùa");
}
"Vòng Lặp for"
// In các số từ 0 -> 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// In các số chia hết cho 3 từ 1 -> 10
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// In các số chẵn chia hết cho 3 từ 1 -> 30
for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i);
    }
}

// Tính tổng các số từ 1 -> 10
let s = 0; 
for (let i = 1; i <= 10; i++) {
    s += i;
}
console.log(s);