//Global scope
// let x=10;
// function fun(){
//     console.log(x);
// }
// fun()
// console.log(x);
// local scope
// function fun(){
//     let x=10;
//     console.log(x);
// }
// fun();
// console.log("value of x is",x);

// function scope

var teacher="Sudhanshu"
function fun(){
    var teacher="Rajat"
    console.log("hello",teacher)
}
function gun(){
    var student="Aman";
    console.log(student);
}
fun();
gun();