var num=5
var result=num/2===0?"even":"odd";
console.log(result)

var sum=()=>{
    console.log("Hello Malini");
}
sum();

//spread operator(...)
var arr=[10,20,30];
var arr2=[...arr,40];
console.log(arr);
console.log(arr2);

//destructing operator
var marks=[90,99,100,98,97];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);

//callback & demo
function demo(){
    console.log("Welcome to demo")
}
var callBack=(func)=>{
    console.log("Welcome to callback")
    func();
}
callBack(demo)

//map
var arr=[10,20,30,40,50,11];
var double=arr.map(num=>num*2);
console.log(double)

//filter
var odd=arr.filter(num=>num%2!==0)
console.log(odd)

//reduce
var total=arr.reduce((val,num)=>val+num,0)
console.log(total)

//task
var result=arr.map(num=>num*2).filter(num=>num>5).reduce((val,num)=>val+num,0)
console.log(result)
