class Student {
    id =0;
    name='';
    city='';

    // var will not work inside class

    display(){
        console.log(this.id,this.name,this.city);

    }
}

// create object for the class

// for we have to create constuctor 
//your constructor name will be class name

var s1=new Student();
s1.id=101;
s1.name="geek";
s1.city="delhi";

s1.display(); //calling method