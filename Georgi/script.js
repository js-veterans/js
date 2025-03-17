// let anun = prompt("What is ypur name");
// // alert("Hello " + anun "!");
// alert(`Hello ${anun} !`)

// let a = Number (prompt("Add first number"));
// let b = Number (prompt("Add second number"));
// console.log(a + b);

// let zuyg = Number(prompt('Add a number'))
// console.log(zuyg % 2 == 0);

// let tiv = Number(prompt("tiv"));
// console.log(tiv % 1 == 0);

// let a =  Number(prompt("tiv"));
// if (a > 18) {
//     alert("mec e");
// }else if (a == 18) {
//     alert("havasar e");
// } else {
//     alert("poqr e");
// }

// let a = confirm("hello");
// console.log(a);

// let num1 = Number(prompt("first number"));
// let sign = prompt("set sign");
// let num2 = Number(prompt("second number"));

// if (sign == "+") {
//     alert(num1 + num2);
// } else if (sign == "-") {
//     alert(num1 - num2);
// } else {
//     alert("error");
// }

// let c = Number(prompt("Jermastichan"));
// let f = c * 9 / 5 +32
// alert(`F = ${f}`);

// let a = Number(prompt("tiv"));
// let secret = 7;
// if (a == secret){
//     alert("true")
// }else{
//     alert("false")
// }

// let login = "admin"
// let pass =  "pass"
// let a = prompt("login");
// let b = prompt("password");
// if (a == login && b == pass) {
//     alert("ok");
// }else {
//     alert("no");
// }

// let a = Number(prompt("tiv 1"));
// let b = Number(prompt("tiv 2"));
// if (a >= b){
//     alert(a)
// }else{
//     alert(b)
// }

// let a = 8
// let b = Number(prompt("5+3=?"))
// while(b != a){
//     b = Number(prompt("5+3=?"));
// }
// alert("ok")

// let a = 0
// while (a <= 10) {
//     console.log(a++);
// }

// let a = 1
// while (a <= 100) {
//     if (a % 5 == 0) {
//         console.log(a);
//     }
//     a++
// }

// let n = Number(prompt("Numbers before N"))
// let d = Number(prompt("n i mej d i bajanvoxner"))
// let count = 0
// let s = 0
// let p = 1
// for (i = 1; i <= n; i++) {
//     if (i % d == 0) {
//         console.log(i);
//         count++
//         s += i
//         p *= i
//     }
// }
// console.log(count);
// console.log(s / count);
// console.log(p);

// console.log(Math.PI);

// let r = Number(prompt("sharavix"))
// alert(2 * Math.PI * r ,"erkarutyun")
// alert(Math.PI * r * r ,"makeres")

// let a = Number(prompt("arajin tiv"))
// let b = Number(prompt("erkrord tiv"))
// if (Math.abs(a) > Math.abs(b)) {
//     alert(a)
// } else if(Math.abs(a) == Math.abs(b)) {
//     if(a > b){
//         alert(a)
//     }else{
//         alert(b)
//     }
// }

// let x = Number(prompt("mutqagreq eranish tiv"))
// // let x = 471
// while (x < 100 || x > 999) {
//     x = Number(prompt("mutqagreq eranish tiv"))
// }
// let c = x % 10
// let a = Math.floor(x / 100)
// let b = Math.floor(x / 10) % 10
// console.log(100 * c + 10 * b + a);


// console.log(c);
// console.log(b);
// console.log(Math.floor(a));

// function tars(x) {
//     while (x < 100 || x > 999) {
//         alert("gre 100-999")
//         x = Number(prompt("mutqagreq eranish tiv"))
//     }
//     let c = x % 10
//     let a = Math.floor(x / 100)
//     let b = Math.floor(x / 10) % 10
//     console.log(100 * c + 10 * b + a);

// }
// let tiv = Number(prompt("x"))
// tars(tiv)



// function divid(a, b) {
//     if (a % b == 0){
//         alert("yes")
//     }else{
//         alert("no")
//     }    
// }

// divid(15, 4)


// let a = Number(prompt("Եռանկյան առաջին կողմ"))
// let b = Number(prompt("Եռանկյան երկրորդ կողմ"))
// let c = Number(prompt("Եռանկյան երրորդ կողմ"))

// if(a + b > c && a + c > b && b + c > a){
//     alert("Գոյություն ունի")
// }else{
//     alert("Գոյություն չունի")
// }

// function makeres(a, b, c) {
//     let p = (a + b + c) / 2
//     let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
//     return s
// }
// alert(makeres(2, 2, 2))

// function erankyun(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a) {
//         alert("Գոյություն ունի")
//     } else {
//         alert("Գոյություն չունի")
//     }
// }

// erankyun(2, 2, 2)

// function armatner(a, b, c) {
//     let d = b * b - 4 * a * c
//     if (d === 0) {
//         alert("armat chka")
//     } else if (d > 0) {
//         let x1 = (-b + Math.sqrt(d)) / (2 * a)
//         let x2 = (-b - Math.sqrt(d)) / (2 * a)
//         alert("x1 = " + x1 + ", x2 = " + x2)
//     } else {
//         let x3 = -b / (2 * a)
//         alert("x1 = x2 =" + x3)
//     }
// }
// armatner(1, 4, 4)

// const car = {
//     anun: "BMW",
//     sharjich: " 4.4 լ",
//     nkar: "https://s.list.am/f/514/87115514.webp",
//     gin: "$65,000",
//     tari: "2020 թ."
// }
// console.log(`${car.anun} ,${car.sharjich}`);
// console.log(`${car.gin} , ${car.tari}`);


// const person = {
//     lastname: "Doe",
//     fullname: function (a) {
//         return `Hello ${a} !!!`
//     }
// }
// console.log(person.fullname("John"));

// const matem = {
//     astichan: function (a, b) {
//         return Math.pow(a, b)
//     },
//     armat: function (a, b) {
//         return a ** 1 / b
//     },
//     klor: function (a) {
//         return Math.round(a)
//     }
// }

// console.log(matem.astichan(4, 2));
// console.log(matem.armat(4, 2));
// console.log(matem.klor(4.3425));


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// const tver = [1, 2, 3, 40, 5, 6, 7, 8]
// for (let i = 0; i < tver.length; i++) {
//     if (tver[i] % 2 == 0 && i % 2 != 0) {
//         console.log(tver[i]);
//     }
// }   

// // let n = Number(prompt("mutqagreq qanak"));
// let tver = []
// for (let n = Number(prompt("mutqagreq qanak")); n)

// const tver = []
// let n = Number(prompt("mutqagreq qanak"))
// let d = Number(prompt("mutqagreq bajanvox tiv"))
// for (let i = 0; i <= n; i++) {
//     if (i % d == 0) {
//         tver.push(i)
// }
// console.log(tver);

const names = [
    "Michael",
    "Emma",
    "David",
    "Sophia",
    "James",
    "Olivia",
    "John",
    "Isabella",
    "Robert",
    "Mia",
    "William",
    "Charlotte",
    "Daniel",
    "Amelia",
    "Joseph",
    "Harper",
    "Charles",
    "Evelyn",
    "Thomas",
    "Abigail"
]

for (let i = 0; i < names.length; i++) {
    const s = names[i];
    for (let j = 0; j < s.length; j++) {
        if (s[j] === "A" || s[j] === "a") {
            console.log(s);
        }
    }
}