// IMPORT EXPORT IN JS
function add(num1, num2) {
    return num1 + num2;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}

div((x, y) => {
    return x / y;
}) // Arrow Functions Does not Work in export


export default add;
export { sub, mul }; // need not use default for multiple functions