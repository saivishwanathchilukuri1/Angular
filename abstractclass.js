var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(EmpID, EName, Salary) {
        this.empID = EmpID;
        this.eName = EName;
        this.basicSalary = Salary;
    }
    Employee.prototype.display = function () {
        console.log("EmpID:" + this.empID + ", Name" + this.eName + ",Basic Salary:" + this.basicSalary);
    };
    return Employee;
}());
var Technical = /** @class */ (function (_super) {
    __extends(Technical, _super);
    function Technical(EmpID, EName, Salary, Subject) {
        var _this = _super.call(this, EmpID, EName, Salary) || this;
        _this.subject = Subject;
        return _this;
    }
    Technical.prototype.calSalary = function (hrs) {
        var salary;
        salary = this.basicSalary * hrs + (this.basicSalary * hrs) * 2.5 / 100;
        console.log('Technical Emp Salary' + salary);
    };
    Technical.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Subject:" + this.subject);
    };
    return Technical;
}(Employee));
var emp;
emp = new Technical(101, 'Srikanth', 12345, 'Angular10');
emp.calSalary(15);
emp.display();
