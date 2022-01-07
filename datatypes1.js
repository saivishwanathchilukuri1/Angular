//Number
var eno = 101;
var ename = 'Srikanth';
var salary = 123.45;
var isActive = true;
/*
let employee:string ="Eno is:"  +eno+", Ename is"+ename+",Salary is :"+salary+"and  status is :"+isActive;
console.log(employee);
*/
var empIds = [101, 102, 103, 104];
var eNames = ['Srikanth', 'Sai', 'Diyansh', 'Naresh', 'Scott', 'John'];
for (var x in empIds) {
    console.log(x);
}
for (var _i = 0, empIds_1 = empIds; _i < empIds_1.length; _i++) {
    var x = empIds_1[_i];
    console.log(x);
}
var employee = "\nEno is:" + eno + "\nEname is: " + ename + "\nSalary is: " + salary + "\nActive status is :" + isActive + "\n";
console.log(employee);
console.log(empIds);
console.log(eNames);
