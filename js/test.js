/*test=(num1,num2)=>{
    return num1+num2;
}
console.log(test(3, 7));


function arg(){
    
    console.log(arguments[0] + arguments[1]);


}
function sum(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
clg(sum)


arg(20,3,6)*/
// decfun();

// // function decfun(){
// //     console.log("hello world");
// // }

// decfun = () => {
//     console.log("object");
// }
// const human={name:"person",age:20,print:function(){
//     console.log(this);//this refers the parent object or"human"
// }};

// human.print();
function test(x){
    if(x!=0){
        console.log(x);
        test(x-1);
    
    
}
test(10);