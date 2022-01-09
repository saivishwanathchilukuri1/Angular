var Arithmetic = /** @class */ (function () {
    function Arithmetic() {
    }
    Arithmetic.prototype.Sub = function (x, y) {
        console.log("Addition is :" + (x - y));
    };
    Arithmetic.prototype.Add = function (x, y) {
        console.log("Addition is :" + (x + y));
    };
    return Arithmetic;
}());
var res;
res = new Arithmetic();
res.Add(100, 200);
res.Sub(100, 50);
