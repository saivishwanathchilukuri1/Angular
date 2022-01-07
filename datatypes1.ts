//Number
let eno:number= 101;
let ename:string= 'Srikanth';
let salary:number = 123.45;
let isActive:boolean= true;
/*
let employee:string ="Eno is:"  +eno+", Ename is"+ename+",Salary is :"+salary+"and  status is :"+isActive;
console.log(employee);
*/
let empIds:number[]= [101,102,103,104];
let eNames:Array<string>= ['Srikanth','Sai','Diyansh','Naresh','Scott','John'];
let contacts:any= ['9696969696','1234567',true,[12,36,45],{x:101,y:201}];
for (let x in empIds)
{
    console.log(x);
}
for (let x of empIds)
{
    console.log(x);
}
let employee:string=`
Eno is:${eno}
Ename is: ${ename}
Salary is: ${salary}
Active status is :${isActive}
`;
console.log(employee);
console.log(empIds);
console.log(eNames);