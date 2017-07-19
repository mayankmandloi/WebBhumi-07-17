var input = window.prompt("Enter + to add - to subtract / to divide * to multiply");
var number1 = window.prompt("Enter first number");
var number2 = parseInt(window.prompt("Enter second number"));
number1 = parseInt(number1);
// jese plus ke liye kara hai if ke andar vese ki - * / ke bhi karna hai.
if (input == "+") {
  var ans=  addition(number1,number2);
  window.alert(ans);
}
if (input == "-") {
    subtraction(number1 - number2);
}
if (input == "*") {
    multipliction(number1 * number2);
}
if (input == "/") {
    division(number1 / number2);
}

function addition(num1,num2)
{
    return num1+num2;
}
function subtraction(num1,num2)
{
    window.alert(num1-num2);
}
function multipliction(num1,num2)
{
    window.alert(num1+num2);
}
function division(num1,num2)
{
    window.alert(num1+num2);
}