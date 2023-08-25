var myName = "moin";
var myAge = 260
//key variable  ="value"

// console.log(myAge)

// >>>>>>>>>>>>>>>Data Types <<<<<<<<<<

// var myname = [1,2]; object💙
// console.log(typeof(myname))

// console.log(10+"20") //1020
// console.log(9-"5") //4 bug
// console.log(false-true)  //-1

// 💥💥💥💥💥💥💥💥??????????????? 1 Interview qstn😀💥💥💥💥💥💥💥💥💥💥 //////////

// d/f b/w null and undefined🚀

// >>>>>>null💙
// var str = null;
// console.log(str)

// //>>>>undefined💙
// var standby=null;
// console.log(standby);
// console.log(typeof(standby)) //null and obj 2nd BUGG


//💥💥💥💥💥💥💥💥💥??????????????2nd interview qstn😀💥💥💥💥💥💥💥💥💥💥💥💥💥???????

//What is NAN?🚀
//=> nan is a property of global obj;
//in other words it is the variable in gloabal scope,
//the initial value of nan is not a number

// var myPhone = 99807623365;
// var str = "mmmm"
// console.log(isNaN(myName))
// console.log(isNaN(str));

// if(!isNaN(str)){
//     console.log("enter valis phone num")
// }



// 💥💥💥💥💥💥💥💥💥💥💥>>>>>3rd interview💥💥💥💥💥💥💥💥💥💥💥💥💥💥??????
// expression and operator🚀
// => operator is  combination of operator and oprand

//not oper= ! false ka true true ka false ex
// console.log(!false)

// console.log(3**3)//3*3*3* 27 exponent operator


//swap of num
a=10;
b=5;

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b)

// 💥💥💥💥💥💥💥💥💥💥💥>>>>>3rd interview💥💥💥💥💥💥💥💥💥💥💥💥💥💥??????
//d/f b/w == and === 🚀
// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2)  true // '=='onbly check the value
// console.log(num1 === num2); // false  '===' check the value and data type and typeof operator alse check🚀


// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌control statement🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// var tmr ='rain';

// if(tmr == "sunny"){
//     console.log("take a raincoat")
// }
// else{
//     console.log("dont take")
// }
 

//write a program leap year or not🚀🚀
// var year= 2001;

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 ===0){
//             console.log("is a leap year")

//         }else{
//             console.log("is not a leap year")

//         }

//     }else{
//         console.log("thi is leap year")
//     }

// }else{
//     console.log("the year "+year + "is not leap year")
// }


//what is truthy and falsey🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

//total 5 falsy vlue >> 0,"",undefined,NaN,false,
// let score;
// if(score ===0 ){
//     console.log("you won")
// }
// else{
//     console.log("ytou lost the game")
// }


//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌//Ternary operator🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

//syntx 
// variablename = (condition)?value1:value2;🚀🚀🚀🚀🚀🚀

// var age = 20;
// (age>= 18) ? "you can vote💙":"you cannot vote💙";
// console.log((age <= 19) ? "you can vote":"you cannot vote")

//find the area of circle .triangle and rectangle;

//  var area = "circle";
//  var pi = 3.15 , l =5, b=4, r=3;

//  switch(area){
//     case 'circle':
//         console.log("the area of circle is"+ pi*r**2);
//         break;

//     case 'triangle':
//         console.log("the area of triangle is"+ (l&b)/2);
//         break;

//     case 'rectangle':
//         console.log("the area of rectangle is"+ (l*b));
//     break;
//     default:
//         console.log("enter the correct value")
//  }


//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌 __loop statement __🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// var num = 0;
// while(num <= 100){ //infinite loop[]
//   console.log(num);
//   num++;  //block scope
// }

///do whille loop
// var num = 0;
// do{
//     console.log(num,"num is"); 
//     num++;
// }while(num <= 10);

// //for loop
// for(num = 0; num <= 10 ; num++){
//     var tab = 2;
//     console.log(tab*num)
// }




//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Function🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌
//before we use function ,we need define it
//you can use the same code but diffrent argument
//functionis group of reduced code many times canm be called anywhere



//function with parameter and arguments
// function arguments are the real values passed to the function

// function sum(a,b){
//   a+b;
// }
// var non=sum(10,20)
// console.log(non)



// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Anonymous function🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌
// var funexp = function(a,b){
//     return total = a+b;
// }
// console.log(funexp(5,10))

//let var and function
// var => function scope
//  let and cost => block scope

// ex of let and var
// function biodata(){
//     let myname = "mm";
//     if(true){
//          let mydata =29
//         console.log(myname);
//         console.log(mydata);
//     }
//     console.log(mydata) whwn n we use let it get error
// }

// biodata()



// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌 arrrays in javascrpit 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// let myfrnd = ['mm',22,'oo',33,'ii',34];

// for(i = 0; i<=myfrnd.length; i++){
//   console.log(myfrnd[i])
// }

//after es6🚀🚀🚀

// for(let elements in myfrnd){
//   console.log(elements) //012345 print only index
// }

// for(let elem of myfrnd){
//   console.log(elem) //it printa all
// }

//using map
// myfrnd.map((ind)=>{
//   console.log(ind)

// })


// 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀performm crud🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
// const animals = ["picock","hen","horse"]

//push method is adds one or more elements to the end of an arrayand returns the new length of the array
// console.log(animals)
// const count = animals.push('bat')
// console.log(animals);
// console.log(count) //it return length 4

//unshist method adds oneor elem to the beginig of an array and returns new lwnght
// console.log(animals)
// const count = animals.unshift('bat')
// console.log(animals);
// console.log(count) //it return length 4


//pop() method removes the last elem of an array
// console.log(animals.pop())
// console.log(animals)

//shift it removes the begining of elements

const animals = ["picock","hen","horse"]

//adding elem using splice method
// const data = animals.splice(animals.length,0,"bird");
// console.log(animals)

//Reduce method
//the reduce meyhod executes  a reduce function (that you provide) on each elem of the array
// resulting in single output value

// the reducer function takes 4 arguments💙
// 1)accumalater
// 2)curr value
// 3)cur index
// 4)source array

// let arr = [5,6,2,3,2];

// let sum = arr.reduce((accumalator,curelem,index,arr)=>{
//   return accumalator += curelem

// },5) //if you want add another number
// console.log(sum);


//🚀🚀🚀🚀🚀🚀Converting 2d 3d array🚀🚀🚀🚀🚀🚀

// const arr = [
//   ["zone1","zone2"],
//   ["zone3","zone4"],
//   ["zone15","zone6"],
// ]

// let flatarr = arr.reduce((accumalater,cuurval)=>{
//   return accumalater.concat(cuurval)  //[ 'zone1', 'zone2', 'zone3', 'zone4', 'zone15', 'zone6' ]
// })
// console.log(flatarr)



//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌String___!🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

//a string is zero or more characters written inside quotes
// js string are used for storing and manupulationg text
// string can be created as primetives

let str ="moin"

//length property
console.log(str.length)

//backslash escape charcter
let str1 = "Moin is studying at aug/23/2021 10:00 \"Am\" and alsostyding"
console.log(str1)

//finding the str
console.log(str1.indexOf("is")) //5

//lastindexof
console.log(str1.lastIndexOf("is")) //5

//seraching the data
//cannot take second start position an argument
//and returns the position
let sdata = str1.search("Am");//39
console.log(sdata)


//there are 3 methods extractiong a part of string
// 1)slice(start,end);  extract the part of position and return extract part
// 2)substring(start,end) //cannot accept negative value
// 3)substr(start,length)  //is similiar as slice but sec parameter specifies the length of extr part

var stt = "mm,oo,ii,nn"

var rest = stt.slice(0,-4) //-4 removing from last
console.log(rest);

//challenge time: display ony 20 charcters of str
let mytweets = "cccccccccccccccdddddddddddddddddddddddcccccccccccccccccccddddddddddddddddddddcccccccccccc"
let slice = mytweets.slice(0,19);
console.log(slice);

//replacing str content

let st = "abcdefgh"
let dat = st.replace('a','A');
console.log(dat);

//three methods for extracting str char

//charAt(position) >>return the unicode
//charCodeAt(position)
//property access[]

///other methods
//concat() ,upperCase(),lowercase(),trim()