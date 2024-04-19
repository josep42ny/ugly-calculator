document.addEventListener("click", (e) => {
    const isKey = e.target.classList.contains("key");
    if (isKey) {
        switch (e.target.id) {
            case "clear":
                clearAll();
                break;
            
            case "delete":

                break;

            case "equal":
                operate(operator, firstNumber, secondNumber);
                break;
            
            default:
                firstNumber += e.target.textContent;
                draw("outCurrent", firstNumber);
                break;
        }
    }
});

let firstNumber = "";
let secondNumber = "";
let operator = "";
function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return b ? a / b : "Wot" };
function operate(operator, firstNumber, secondNumber) {
    if(operator == 0) {return;}
    const OPERATIONS = {"+":add, "-":subtract, "*":multiply, "/":divide};
    return OPERATIONS[operator](firstNumber, secondNumber);
}
function draw(id, input) {
    const element = document.querySelector(`#${id}`);
    element.textContent = input;
}
function clearAll() {
    draw("outCurrent", "");
    draw("outTotal", "");
    firstNumber = "";
    secondNumber = "";
    operator = "";
}