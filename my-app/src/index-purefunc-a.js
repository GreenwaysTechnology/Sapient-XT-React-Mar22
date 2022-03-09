//pure function.

//pure function or not
function getMessage(message) {
    return message;
}
console.log(getMessage('hello'))

//impure function
function calculate(a) {
    let b = 100;
    // let res = a * 10
    // return res;
    return a * b;
}
