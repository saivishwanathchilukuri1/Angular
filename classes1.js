var Address = /** @class */ (function () {
    function Address(doorNo, city, state, country) {
        this.doorNo = doorNo;
        this.city = city;
        this.state = state;
        this.country = country;
    }
    return Address;
}());
var Customer = /** @class */ (function () {
    //City:string;
    //State:string;
    //Country:string;
    //constructor
    function Customer(Id, Name, Bal, custAddress) {
        this.custId = Id;
        this.custName = Name;
        this.custBal = Bal;
        this.custAddress = custAddress;
    }
    Customer.prototype.Display = function () {
        var x = "\n            Customer ID is:" + this.custId + "\n            Customer Name is :" + this.custName + "\n            Customer Balance is :" + this.custBal + "\n            Customer Address is:" + this.custAddress.city + "," + this.custAddress.state + "\n        ";
        console.log(x);
    };
    return Customer;
}());
var address = new Address(101, 'Hyderabad', 'TS', 'India');
var cust = new Customer(101, 'Srikanth', 12345, address);
cust.Display();
