 // function fibonacci() {
// let limit =10;
// let init=0;
// let first=1;
// let next=0;
// function fib (init,limit,next,first) {
// }

const fib =(n) =>{
    if(n<=2) return 1;
    n=fib(n-1)+fib(n-2);
     console.log(n);
     return fib(n-1);
}
fib(10);
