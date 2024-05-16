// console.log("Sudhanshu");
// console.log(2+2);

// var a="abc";
// var a="bacd";
// var a=9564;
// console.log(a);
// --var can be redeclare and reintialize again---- is a function scope
// -- let can't be redeclare but you can reintialize it.---is a block scope
// -- const can't be redeclare and also can't reintialize

// let a=15;
// a="abc"
// console.log(a);

// const a=10;
// console.log(a);


// -- javaScript has 8 datatypes
// --String
// --Number
// --BigInt
// --Boolean
// --undefined
// --null
// --Symbol
// --Object

// --Type conversion
// Number
// String
// Boolean

// var a=+"123";
// var b=a+1;
// console.log(b);
// console.log(typeof a);


// var a="12"+1+2
// var b=1+2+"12";
// console.log(b);
// console.log(a);

// var ans=134+""
// console.log(ans);
// console.log(typeof ans);

// var a=1123;
// var b=String(a);
// console.log(typeof b);

// var a=123;
// var b=a+"Hello";
// console.log(b);

// var a="Hello";
// var b=Number(a)+1;
// console.log(b);
// console.log(typeof b);


// code execution in js
// var a="Development"
// let b=34;
// const c="JavaScript";
// console.log(a);
// console.log(b);
// console.log(c);

// Dialogue box
// alert("Hello");
// confirm("Hello guys")
// prompt("aap kis yaer me hai")

// Falsy value in js
// " "
// undefined
// null
// NAN
// 0
// flase


// var a=prompt("plz enter value 1")
// var b=prompt("plz enter value 2")
// console.log(a*b);
// console.log(a/b);
// console.log(a-b);

// var a=+prompt("plz enter value 1")
// var b=+prompt("plz enter value 2")
// console.log(a+b);


// -- String/Template literal

// const str="Hello";
// console.log(str[0]);
// console.log(str.charAt(2));
// console.log(str.length);

// const str1="      hello2     "
// console.log(str1);
// console.log(str1.trim());


// const str="abc";
// console.log(str.toUpperCase());

// const str="hello i am sudhanshu";
// console.log(str.indexOf("s"));

// const str="8642"
// console.log(str.padStart(16,"*"));

// const str1="76768"
// console.log(str.padEnd(25,"$"));

// const str2="Hello i am  aman"
// console.log(str2.split(" "));


// --Math object in js

// console.log(Math.pow(2,3));
// console.log(Math.ceil(6.3));
// console.log(Math.floor(2.3));
// console.log(Math.round(7.8));
// console.log(Math.random());
// console.log(Math.floor(Math.random()));


// --Object in js
// In javascript almost evertything is an object
// .Boolean can be Object(if defined with the new keyword)
// .Numbers can be Object(if defined with the new keyword)
// .Strings can be Object(if defined with the new keyword)
// .Dates are always object
// .Maths are always object
// .Regualr expressions are always object
// .Arryas are always object
// .Functions are always object
// .Objects are always object
// All javaScript values except primitive are objects.


// const x=2;
// const y=2;
// console.log(x==y);

// const x=""
// const y=2;
// console.log(x==y);


// const x={
//     a:"hello",
//     b:"by"
// }
// const y={
//     a:"hello",
//     b:"by"
// }

// const x={
//     fname:"Sudh",
//     lname:"Kumar",
//     "phone no":4556886
// }
// console.log(x["fname"]);
// console.log(x["lname"]);
// console.log(x["phone no"]);

const x={
    fname:"veer",
    lname:"kumar",
    "phone no":965352,
    address:{
        city:"bhopal",
        pincode:67890
    }
}

x.year="final"

console.log(x["address"]);
console.log(x["address.city"]);
console.log(x["year"]);









