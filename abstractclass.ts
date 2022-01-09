abstract class Employee{
    protected empID:number;
    protected eName:string;
    protected basicSalary:number;

    constructor(EmpID:number,EName:string,Salary:number)
    {
        this.empID=EmpID;
        this.eName=EName;
        this.basicSalary=Salary;
    }
    abstract  calSalary(hrs:number):void;
    display()
    {
        console.log("EmpID:"+this.empID+", Name"+this.eName+",Basic Salary:"+this.basicSalary);
    }
}
class Technical extends Employee{
    subject:string;
    calSalary(hrs:number):void
    {
        let salary:number;
        salary = this.basicSalary *hrs +(this.basicSalary *hrs)*2.5/100;
        console.log('Technical Emp Salary'+salary);

    }
    constructor(EmpID:number, EName:string ,Salary:number, Subject:string)
    {
        super(EmpID,EName,Salary);
        this.subject=Subject;

    }
    display() {
        super.display();
        console.log("Subject:"+this.subject);
    }


    }
    let emp:Employee;
    emp=new Technical(101,'Srikanth',12345,'Angular10');
    emp.calSalary(15);
    emp.display();

    
