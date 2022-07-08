var arr=[20,30,39,29,21,34,68]

var newarray= arr.map(function(ele){

    if(ele%2 ==0){
        return ele +10
    }else {
        return ele*10
    }
})

console.log(newarray)