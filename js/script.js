//q1
function wordLog(theWord) {
    console.log(theWord)
}
wordLog("What the fuc is this nonsense")

//q2
function fistAndLstName(firstname, lastname,) {
    var sum = firstname + " " + lastname;
    console.log(sum);
}

fistAndLstName("Mr","HiccUp");

//q3

function addNums(firstNumber,secondNumber){
    if(typeof firstNumber === "number" && typeof secondNumber === "number") {
        const result = firstNumber + secondNumber;
        return result;
    } else {
        console.warn("please supply number value");
    }
}
const result = addNums(2,5);
console.log(result);

//q4

function numbersArg(bar, coffe, ice) {
    if (typeof bar === 1, typeof coffe === 2, typeof ice === 3) {
        const result = bar+coffe+ice;
        return result;
    } else {
        console.warn("invalid argument types");
    }
}

