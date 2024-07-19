var myName = "Chidchanok";
var myNumber = 19;
console.log(myName);
function showMyAge() {
    myNumber--;
    //myNumber -= 1;
    //myNumber = myNumber -1;
    console.log(myNumber);
    document.getElementById("age-data").innerHTML = String(myNumber);
}
function cal() {
    var _a;
    var num1;
    var num2;
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    var res = num1 + num2;
    (_a = document.getElementById("age-data")) === null || _a === void 0 ? void 0 : _a.innerHTML = String(res);
}
