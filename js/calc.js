function Calculator(p1, p2, op){
    if(op == "+" ) {
    function add(){
        var total = p1+p2
        return total;
    }
    return add();
    }
     else if(op == "*" ) {
    function mult(){
        return p1*p2;
    }
    return mult();
    } 
    else if(op == "-" ) {
    function muni(){
        return p1-p2;
    }
    return muni();
    }
    else if(op == "/" ) {
    function div(){
        return p1/p2;
    }
    return div();
    }
    else if(op == "%" ) {
    function moju(){
        return p1%p2;
    }
    return moju();
    }
    
}

const prompt = require('prompt-sync')();
 
var num1 = prompt('1 Number: ');
var num2 = prompt('2 Number: ');
var operator = prompt('Choose the Operator: \n1, Addition\n2, Multiple\n3, Divided \n4, Minus \n5, Modulo\nEnter Operator Options: ');


 if (operator == 1 ){
    console.log("Addition: "+num1+" + "+num2 +" = "+Calculator(num1,num2,'+'));
}  else if (operator == 2 ){ 
        console.log("Multiple: "+num1+" * "+num2 +" = "+Calculator(num1,num2,'*'));
    }  else if (operator == 3 ){
        
        console.log("Divided: "+num1+" / "+num2 +" = "+Calculator(num1,num2,'/'));
    }  else if (operator == 4 ){
        console.log("Minus: "+num1+" - "+num2 +" = "+Calculator(num1,num2,'-'));
    }  else if (operator == 5 ){
        console.log("Modulo: "+num1+" % "+num2 +" = "+Calculator(num1,num2,'%'));
    }  else {
        console.log("Wrong Operator");
    } 
//var username = prompt("what is your name?");

//console.log("Hello there, "+name);