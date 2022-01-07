//Normal datatypes
var eno = 101;
var ename = 'Srikanth';
var salary = 123.45;
var isActive = true;
//Complex Types
var empIds = [101, 102, 103, 104];
var eNames = ['Srikanth', 'Sai', 'Diyansh'];
var contacts = ['98761234', [1, 2, 3, 4, 5], true, { a: 1, b: 2 }];
//let employee:string="Eno is :"+eno+"Ename is :"+ename+"Salary is: "+salary+"and status is"+isActive;
//for ..in :index
for (var x in empIds) {
    console.log(empIds[x]);
}
//for ..of:value
for (var _i = 0, eNames_1 = eNames; _i < eNames_1.length; _i++) {
    var x = eNames_1[_i];
    console.log(x);
}
var employee = "\nEno is :" + eno + "\nEname is :" + ename + "\nSalary is: " + salary + "\nActive  status is :" + isActive + "\n";
//var employee="\n Eno is :"+eno+"\nEname is:"+ename +"\nSalary is :"+salary+"\nActivity status is :"+isActive;
console.log(employee);
console.log(empIds);
console.log(eNames);
console.log(contacts);
