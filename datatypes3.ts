//Normal datatypes
let eno:number=101;
let ename:string='Srikanth';
let salary:number=123.45;
let isActive:boolean=true;
//Complex Types
let empIds:number[]=[101,102,103,104];
let eNames:Array<string>= ['Srikanth','Sai','Diyansh'];
let contacts:any= ['98761234',[1,2,3,4,5],true,{a:1,b:2}];
//let employee:string="Eno is :"+eno+"Ename is :"+ename+"Salary is: "+salary+"and status is"+isActive;
//for ..in :index
for (let x in empIds)
{
    console.log(empIds[x]);
}
//for ..of:value
for(let x of eNames)
{
    console.log(x);
}
let employee:string=`
Eno is :${eno}
Ename is :${ename}
Salary is: ${salary}
Active  status is :${isActive}
`;

//var employee="\n Eno is :"+eno+"\nEname is:"+ename +"\nSalary is :"+salary+"\nActivity status is :"+isActive;
console.log(employee);
console.log(empIds);
console.log(eNames);
console.log(contacts);