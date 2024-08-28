function someFunction(){
    return function x(){
        return 10;
    }
}
function anotherFunction(f1){
    f1();
    console.log("called f1");
}
function hello(){
    console.log("hello");
}
anotherFunction(hello);