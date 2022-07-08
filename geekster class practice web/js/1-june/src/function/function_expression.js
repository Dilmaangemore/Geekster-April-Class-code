// function decleration
// when a function is created , its value . it is started inside a variable



function sayHii(){
    console.log('hello');
}

sayHii()
console.log(sayHii)


// function expression: whwere you create a function and assign inside a variable

let sayHello=function(){
    console.log('say hello fnction');
}


// difference between FD and FE

//let  result = sum(3,4)
//console.log(result);

function sum(a,b)
{
    return a+b
}

console.log(result)

let result= function(a,b){
    return  a+b;
}

// when FD is within a block , it's visibleanywhere inside the block But not outside the block

let age = 36
if(age>18){
    function isEligible()
    {
        console.log('yes')
    }
     isEligible()
}else{
    isEligible()
    function isEligible()
    {
        console.log('no')
    }
}
   isEligible() 
    
}