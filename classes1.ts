class Address{
    doorNo:number;
    city:string;
    state:string;
    country:string;
    constructor(doorNo:number,city:string,state:string,country:string)
    {
        this.doorNo= doorNo;
        this.city=city;
        this.state=state;
        this.country=country;
    }

}
class Customer
{
    custId:number;
    custName:string;
    custBal:number;
    DoorNo:number;
    custAddress:Address;
    //City:string;
    //State:string;
    //Country:string;
    //constructor
    constructor(Id:number,Name:string,Bal:number,custAddress:Address)
    {
        this.custId=Id;
        this.custName=Name;
        this.custBal=Bal;
        this.custAddress=custAddress;

    }
    Display()
    {
        let x:string=`
            Customer ID is:${this.custId}
            Customer Name is :${this.custName}
            Customer Balance is :${this.custBal}
            Customer Address is:${this.custAddress.city},${this.custAddress.state}
        `;
        console.log(x);
    }
}
var address:Address = new Address(101,'Hyderabad','TS','India');
var cust:Customer=new Customer(101,'Srikanth',12345,address);
cust.Display();