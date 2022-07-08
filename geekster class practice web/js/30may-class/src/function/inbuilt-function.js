//alert('hello world')


let age=prompt("what is your age ");
console.log(age);
if(age>18){
    alert('eligible for voting');

}else{
    alert('not eligible');
}

// confirm returns true and false

let value=confirm('is your age more than 18');
if(value){
    alert('eligible for vote');
}else{
    alert('cant vote');
}