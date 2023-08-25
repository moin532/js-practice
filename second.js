
// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Date and time 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

let currdate = new Date().toLocaleString().toString();
// console.log(currdate);

var d = new Date(2023,8,5);
// console.log(d)


//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌math obj 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌
//allows you to perform mathamatics  task on number

//propertys

// console.log(Math.PI);

//math.round
let num = 10.8654;
// console.log(Math.round(num))//10

// console.log(Math.pow(2,3));

//sqrt
// console.log(Math.sqrt(25));

//absoloute value abs
// console.log(Math.abs(-55))

//ciel
// console.log(Math.ceil(4.51)) //5

//mth random
console.log(Math.floor(Math.random()*10));


// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Dom in JS🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌


//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Events 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

//events are "things" that happen to html elements

//html events can be something the browser does , or somenthing a user does

//some ex of html evnets
//an html page has finished loading
//an html input field was changed
//an html input field was clicked

// /js lets you execute code when events detected


// 4ways writing evnet
// 1)using inline events ex=alert()
//2)by calling a function
//3)using inline events(elem.onclick) document.getelementbyid()
//4)using event listener


// event object
//mouseEvent ex = mousedown,mouseup, 
// focusevevnt,keyboardevent

//diff b/w onclick and addeventlistener

// 1)addeventlistener does not override existing event handelers
// 1)onclick does overridse existing onclick handelers


// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌 js timing events🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

//settimeout();
//cleartimeout();
//setintervel();
//clecrinterval();

// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌 this ob🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

//contain current context
 

// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Array_distructuring🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// const mydata = ["moin","mm","enterpr","ices",];
// console.log(...mydata)
// console.log(mydata);


//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌obj properties🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// let name1="name"
// const data ={
//     // name:"mm", name: 'mm'=o/p =>name: 'mm'
//     [name1]:"mm",//name: 'mm'
// }
// console.log(data);

//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌event bubbling and event capturing🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌
                            
//              serach in browser



// / 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Hoisting🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// is a mechanism where var and functions declaration are moved to the top of their scope before the code executes


// console.log(name1); //undefined
// var name1;
//  name1 = "mm"
//  console.log(name1);
 

//  scope chain and lexcical scoping in js

// scope chain used to resolve th evalue of varaiable name in js
//scope chain in js lexically defined wich means tha wecan see what thw scopechain will be by looking at the code

//at th etop we have their global scope,wich is the window object inthe browser ex= pi=3.142

//       lexical scope means
// the inner function can get acces to thier parent function variable but the vice-versa is not true;



let a ="hello"; //global scope

// function hello(){
//     let b  =" how arer you"

//     function by(){
//         let c = " waht are you doing";
//     }
//     by()
//     // console.log(a+b+c);
// }
// hello()

//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌closures🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// closure gives you acces to an outer function scopefrom an inner function


// in js closures are created every time a function is created at function created time



// function hello(a){
//     let b  = 3

//     function by(){
//         let c = (a+b);
//         console.log(c)
//     }
//     by()
//     // console.log(a+b+c);
// }
// hello(5)

// ex 2
function hello(a){
    let b   =4

    function by(){
        
        console.log(a+b);
    }
    return by()
}
let closure = hello(5);
console.log(closure)

// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Event loop🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

// 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌function currying sum(5)(3)(7)🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌

function sum(num1){
    return function (num2){
        return function(num3){
            console.log(num1+num2+num3)
        }
    }
}
const sum1 = (sum1)=>(sum2)=>(sum3)=>console.log(sum1+sum2+sum3)
sum(5)(3)(7);

// / 🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌Calback hell🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌



//🌌🌌🌌🌌🌌🌌json🌌🌌🌌🌌🌌🌌

//convert obj to json
var obj = {key_1:"text", key_2:true, key_3:2.5}
var convert = JSON.stringify(obj)//{"key_1":"text","key_2":true,"key_3":2.5}
console.log(convert);

//conver json to object
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr);

