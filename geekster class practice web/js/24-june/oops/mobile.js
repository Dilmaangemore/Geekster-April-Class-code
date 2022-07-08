class Mobile {
    name;
    price;
    rating;
    qty;
    totalAmt;

    constructor(){
        this.name=''
        this.price=0
        this.rating=0
        this.qty=0
        this.totalAmt=0

    }
    display(){
        console.log(this.name,this.price,this.qty,tjis.rating)

    }
    totalAmount(){
        console.log(this.price*this.qty)
    }
}   

var iphone=new Mobile()

var onePlus=new Mobile()

iphone.name="iphone 13pro"
onePlus.name="oneplus 9 "

iphone.display()
onePlus.display()