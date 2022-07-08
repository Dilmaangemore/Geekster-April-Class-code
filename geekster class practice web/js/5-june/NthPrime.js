let n=5;
let num=1
let count=0;
let i;
while (count<n) {
    num=num+1;

    for( i=2;i<=num;i++){
        if(num%i==0)
        {
            // break the loop if above condion true
            break;
        }
    }
    if(i==num)
       {
           // increment the count if if number is prime

           count++;

       } 
  
    
}
document.write('the ' +n+ '\n th prime numbrt is :'+num)

