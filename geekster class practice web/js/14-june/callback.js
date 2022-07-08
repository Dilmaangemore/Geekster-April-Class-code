function fnCallback(printName){
    printName();
}

fnCallback(function(){
    console.log("i am vishnu");
});