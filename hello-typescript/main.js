var test = "testing variable";
function myFunction(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (valor) {
    return valor * 3;
});
numbers.map(function (valor) { return valor * 3; }); //ES 2015
var MathTest = /** @class */ (function () {
    function MathTest() {
    }
    MathTest.prototype.Sum = function (x, y) {
        return x + y;
    };
    return MathTest;
}());
var n1 = 'test';
n1 = 4;
