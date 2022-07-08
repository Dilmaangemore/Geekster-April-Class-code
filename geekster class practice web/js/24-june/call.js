var obj1={
    c:100,
};

var obj2={
    c:50,
};
function f1(x,y){

    var a=x
    var b=y

console.log(a + b +this.c);
}
fn1.call(obj1,20,30)
fn1.call(obj2,20,30)