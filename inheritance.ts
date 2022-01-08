class Employee{
    empID:number;
    eName:string;
    salary:number;

    constructor(EmpID:number,EName:string,Salary:number)
    {
        this.empID=EmpID;
        this.eName=EName;
        this.salary=Salary;
    }
    display()
    {
        console.log("EmpID:"+this.empID+", Name"+this.eName+",Basic Salary:"+this.salary)
    }
}
class Technical extends Employee{
    subject:string;
    constructor(EmpID:number,EName:string,Salary:number,subject:string)
    {
        super(EmpID,EName,Salary);
        this.subject =subject;
    }
    display()
    {
        super.display();
        //console.log("EmpID:"+this.empID+",Name:"+this.eName+",Basic Salary:"+this.salary+"Subject is :"+this.subject);
        console.log("Subject is :"+this.subject)
    }

}
//var emp= new Employee(101,'Srikanth',12345);
//emp.display();

var techEmp =new Technical(102,'Diyansh',12345,'Typescript');
techEmp.display();

