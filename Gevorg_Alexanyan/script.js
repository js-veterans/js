// let a = Number(prompt("Enter Height:"));
// let b = Number(prompt("Enter Width:"));

// alert("Perimeter: " + (2 * (a + b)));
// alert("Area: " + (a * b));

// let a = (prompt("Enter your name"))

// alert(`Barev ${a}`)

// let nam1 = Namber(prompt("Namber 1"));
// let nam2 = Namber(prompt("Namber 2"));

// console.log(`SUM ${nam1+nam2}`)

// let num3 = Number(prompt("Number"));

// console.log(num1%2===0)

// let num4 = Number(prompt("How old are you?"));

// console.log (num4%1===0);

// if(num4 >= 18){
//     alert("oll right");
// }  else{alert("you are so yang")}

// let num2 = Naber(confirm("Are you sure?"));

// console.log( num2 )

// let num1 = Number(prompt("number 1"));

// let action = prompt("action");

// let num2 = Number(prompt("number 2"));

// if (action === "+"){
//     alert(num1 + num2)
// }else if( action === "*"){
//     alert(num1 * num2)
// }

// let C = Number(prompt("C"));

// let F = (C * 1.8 + 32);

// alert(`F ${F}`)

// let secret = 7;

// let pass = prompt("pass")

// let login = prompt("login")

//  let login1 = "asdf";

//  let pass1 = "asdf";

//  if ( login1 == login && pass1 == pass ){
//     alert("true")
//  }else {
//     alert("false")}

// if (secret === num){
//     alert("all right")
// }else alert( "wrong")

// let num1 = Number(print("num1"));

// let num2 = Number(print("num2"));

// if (num1 > num2) {
//      alert(num1)
// }else if (num1< num2){
//     alert(num2)
// }
// let a = Number(prompt("5+3"))
// while(a != 8){
//   a = Number(prompt("5+3"))

// let a = 1
// while (a <= 10) {
//     console.log(a++)
// }

// let e = 1
// while (e <= 100) {
//     if (e % 5 == 0) {
//         console.log(e)
//     }
//     e++
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let n = Number(prompt("n"))
// let d = Number(prompt("d"))
// let count = 0
// let s = 0
// let e = 1

// for (let i = 1; i <= n; i++) {
//     if (i % d == 0) {
//         console.log(i)
//         count++
//         s += i
//         e *= i
//     }
// }

// console.log(e);

// console.log(count);
// console.log(s / count)

// let r=Number(prompt("r"));
// console.log(Math.PI * r *2);
// console.log(Math.PI * r * r )

// let a=Number(prompt("a"));

// let b=Number(prompt("b"));

// if (Math.abs(a)>Math.abs(b)){
//     console.log(a);
// }else if(Math.abs(a)==Math.abs(b)){
//      if(a>b){
//         console.log(a);
//      }else{
//         console.log(b);

//      }
// }
//  else{
//     console.log(b);
// }

// function tars(){
//     let x = Number(prompt("X"));
//     while(x<99 || x>999 || x % 10 == 0 ){
//        x=Number(prompt("X"))
//     }

//     let a = Math.floor(x / 100);
//     let b = Math.floor((x - 100 * a) / 10);
//     let c = x % 10;
//     console.log(c * 100 + b * 10 +a);
// }

// function tars(x) {
//     while (x < 99 || x > 999 || x % 10 == 0) {
//         alert("you number is not right")
//         x = Number(prompt("X"))
//     }
//     let a = Math.floor(x / 100);
//     let b = Math.floor((x - 100 * a) / 10);
//     let c = x % 10;
//     console.log(c * 100 + b * 10 + a);
// }

// let tiv = Number(prompt("x"));
// tars(tiv)

// function divid(a,b){
//        if(a % b ==0){
//         console.log("Yes");
//         console.log(a,b);
//        }else{
//         console.log("No");
//        }
// }

// divid(15,3);
// divid(11,3);
// divid(2,12)


function erankyun(a, b, c) {
  if (a >= b + c || b >= a + c || c >= a + b) {
    console.log("Doesn't exist");
  } else {
    console.log("Exist");
    let s = (a + b + c) / 2;
    console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  }
}

// erankyun(1, 2, 3);
// erankyun(2, 2, 5)
// erankyun(3, 4, 5);

// let a = Number(prompt("Enter value for a (ax^2 + bx + c = 0):"));
// let b = Number(prompt("Enter value for b (ax^2 + bx + c = 0):"));
// let c = Number(prompt("Enter value for c (ax^2 + bx + c = 0):"));

// function discriminant(a, b, c) {
//     let D = b ** 2 - 4 * a * c; 
//      console.log(D);

//     if (D < 0) {
//         console.log("X is not defined (no real solutions)");
//     } else if (D === 0) {  
//         let x = -b / (2 * a);
//         console.log("X =", x);
//     } else {
//         let x1 = (-b + Math.sqrt(D)) / (2 * a);
//         let x2 = (-b - Math.sqrt(D)) / (2 * a);
//         console.log("1. X =", x1);
//         console.log("2. X =", x2);
//     }
// }
// discriminant(a,b,c)

// function erankyun(a, b, c) {
//         if (a >= b + c || b >= a + c || c >= a + b) {
//             console.log("Doesn't exist")
//         }else{
//             console.log ( "Exist")
//             let s=(a+b+c)/2
//             console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
//             return
//         }
//     }

//     erankyun(1, 2, 3);
//     erankyun(2, 2, 5)
//     erankyun(3, 4, 5);   


// const myCity = {
//     city: "asd",
// }
// myCity.popular = true,

// console.log(myCity);

// myCity.country = "USA",

// console.log(myCity);


// const car = {
//     model: "Кран MAZ (МАЗ)",
//     taretiv: 1992,
//     arjeq: "15000$",
//     img: "https://s.list.am/f/332/85055332.webp",
//     owner: "Davo"

// }

// console.log(`${car.model} ${car.taretiv}`);


// const car = {

// } 

// car.name = "tesla"

// console.log(car);

// car.price = "120000$"

// console.log();


// const person = {
//     firstName: "John",
//     lastName:  "Doe",
//     greet: function(name){
//         return `hello ${name}`
//     }
// }



// console.log(person.greet("Gevorg"));


// const mathm = {
//     astechan: function (a, b) {
//         return a ** b
//     },
//     armat: function (a, b) {
//         return a ** (1 / b)
//     },
//     klor: function (a) {
//         if (a % 1 > 0.5 ){
//             return a+1
//         }else if(a % 1 == 0.5){
//             return a + 0.5
//         }
//          else {
//          return a - (a % 1) 
//         }
//     }
// }
// console.log(mathm.astechan(2,8));

// console.log(mathm.armat(256,8));

// console.log(mathm.klor(2,443312) );

// console.log(mathm.klor(3.5))

// const tver = [ ]

//  for ( let i=0 ; i<tver.length ; i++ ) {
//     if( tver[i]%2 == 0 && i%2==1 ) {
//         console.log(`${tver[i]} ${tver[i]**2}`)
//     }else{}


    
    // console.log(`${tver[i]} ${tver[i]**2}`)}

//     let a  = Number(prompt("tiv"))
//     let d  = Number(prompt("tiv1"))
    
    
    

//     for (let i=0; i <= a; i++){
//      if( i%d==0){
//          tver.push(i)
        
//      }
//    }
     
//    console.log(tver)


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
    for(let g = 0; g < names[i].length; g++){
        if (names[i][g] == "a" || names[i][g] == "A" ){
            console.log(names[i]);
            
        }
    }
  }
 


  
