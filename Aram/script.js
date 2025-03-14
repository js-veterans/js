// console.log("Hello world")
// // alert("welcome")
// // prompt("Hello")
// // confirm("subscribe")

// console.log(4 > 8);
// console.log(4 < 8);
// console.log(4 == 8);
// console.log(4 != 8);


// console.log(4 === "4");
// console.log(true === 1);
// console.log(true !== 1);


// x = Number(prompt("type the number"))

// // alert( x >= 18)
// alert( x * x)




// let a = Number(prompt("Grir uxankyan erkarutyuny"));
// let b = Number(prompt("Grir uxankyan laynutyuny"));


// let makeres = a * b;


// let paragic = 2 * (a + b);


// console.log(`Uxankyan erkarutyuny ${makeres}`)
// console.log(`Uxankyan laynutyuny ${paragic}`);



// let name = prompt("What is your name?")

// alert(`Hello ${name}`)


// let num1 = Number(prompt('Type first number'))
// let num2 = Number(prompt('Type second number'))
// let gumar = num1 + num2;
// console.log(gumar)


//  let num1 = Number(prompt('Type first number'))
//  console.log(num1 % 2 == 0);

//  let num = Number(prompt('Type first number'))

//  console.log(num % 1 == 0)


// let num = Number(prompt('Type first number'))

// if(num >= 18){
//     console.log("You can enter");
// }else{
//     console.log("You can't enter")
// }

// let answer = confirm("Do you like movie")
// if( answer){
//     console.log("Great")
// }else{
//     console.log("ok")
// }


// let tiv1 = Number(prompt("Grir arajin tivy"))
// let gorcoxutyun = prompt("Grir gorcoxutyun");
// let tiv2 = Number(prompt("Grir erkrord tivy"));

// if(gorcoxutyun == '-'){
//     console.log(tiv1 - tiv2)
// }else if(gorcoxutyun == '+'){
//     console.log(tiv1 + tiv2)
// }else if(gorcoxutyun == '/'){
//     console.log(tiv1 / tiv2)
// }else if(gorcoxutyun == '*'){
//     console.log(tiv1 * tiv2)
// }else{
//     console.log("error")
// }


// let c = Number(prompt("Type the celsus number"));

// let f = c * (9 / 5) + 32;

// console.log(`fahrenhait is ${f}`)




// let secret = 7;

// let number = Number(prompt("write number"))

// if(secret == number){
//     console.log("Right")
// }else{
//     console.log("Wrong")
// }


// let password = 'admin';
// let login = "parol";

// let answer1 = prompt("Type password");
// let answer2 = prompt("Type login")

// if(answer1 == password && answer2 == login){
//     console.log("You can enter")
// }else{
//     console.log("You can't enter")
// }



//  let tiv1 = Number(prompt("Grir arajin tivy"))
//  let tiv2 = Number(prompt("Grir arajin tivy"))
//  let result;

//  if(tiv1 > tiv2){
//     result = tiv1
//  }else{
//     result = tiv2
//  }

//  console.log(result);



// let answer =  Number(prompt("what will be 5 + 3"))

// while(answer != 8){
//     answer =  Number(prompt("what will be 5 + 3"))
// }













// function isTriangle(a, b, c){
    //     if(a + b > c || a + c > b || b + c > a ){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    
    // let a = Number(prompt('type number a'))
    // let b = Number(prompt('type number b'))
    // let c = Number(prompt('type number c'))
    
    // if(isTriangle(a, b, c)){
    // console.log('The triangle exist')
    // }else{
    //     console.log('The triangle doesnt exist')
    // }
    
    
    
    
    
    // function calculateArea(a, b, c) {
    
    //     let p = (a + b + c) / 2;
    //  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    //     return area;
    // }
    
    
    // let a = Number(prompt('type number a'))
    // let b = Number(prompt('type number b'))
    // let c = Number(prompt('type number c'))
    
    // console.log(calculateArea(a, b, c))
    
    
    
    // function armat(a, b, c) {
    
    //     let D = b * b - 4 * a * c;
    
    //     if (D > 0) {
           
    //         let x1 = (-b + Math.sqrt(D)) / (2 * a);
    //         let x2 = (-b - Math.sqrt(D)) / (2 * a);
    //         console.log(`x1 = ${x1}, x2 = ${x2}`);
    //     } else if (D === 0) {
     
    //         let x = -b / (2 * a);
    //         console.log(`x = ${x}`);
    //     } else {
        
    //         console.log("No real roots (complex solutions).");
    //     }
    // }
    
    
    // armat(1, -3, 2);  



    
//  const car = {
//     name: 'Tesla',
//     model: 'X',
//     type: 'Electrical',
//     year: 2017,
//     img: "https://s.list.am/f/855/86686855.webp"
//  };


//  console.log(`${car.name} ${car.model}`);
//  console.log(`${car.type} ${car.year}` );


// const person = {
//     firstName: "Aram",
//     lastName: "Melkonyan",
//     greet: function(name){
//      return `Hello ${name}`
//     }
// }

// console.log(person.greet("Aram"))


// const matem = {
//     astichan: function(a, b){
//       return a ** b;
 
//     }, 
//     armat: function (a) {
//         return Math.sqrt(a)
//     },
//     klor: function (a){
//         return Math.round(a)
//     }
   
// }

// console.log(matem.astichan(2, 5))
// console.log(Math.ceil(matem.armat(48)))


// const number = [3, 5, 2, 65, 45]

// for(let i = 0; i < number.length; i++){
//     console.log(number[i] ** 2)
// }




// const number = [3, 5, 2, 65, 45, 4, 8]

// for(let i = 0; i < number.length; i++){
//    if(number[i] % 2 == 0){
//     console.log(number[i])
//    }
// }



// const number = [3, 5, 2, 65, 45, 4, 8]

// for(let i = 0; i < number.length; i++){
//    if(number[i] % 2 == 0 && i % 2 != 0){
//     console.log(number[i])
//    }
// }

// let array = []
// let number = Number(prompt("Greq tiv"));

// for(let i = 0; i <= number; i++){
//     if(i % 5 == 0){
//         array.push(i)
//     }
    
// }
// console.log(array);


let names = ["Michael","Emma","David","Sophia","James","Olivia","John","Isabella","Robert","Mia","William","Charlotte","Daniel","Amelia","Joseph","Harper","Charles","Evelyn","Thomas","Abigail"];
let newNames = [];

for(let i = 0; i < names.length; i++){

for(let j = 0; j < names[i].length; j++){

    if(names[i][j] == 'a' || names[i][j] == 'A'){
        newNames.push(names[i])
    }
}
}

console.log(newNames)
