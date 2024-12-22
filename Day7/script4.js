
const screen = document.getElementById("screen");
const formula = document.getElementById("formula");


let currentInput = "";
let formulaText = "";


function handleButtonClick(value) {
    if (value === "=") {
        const result = eval(currentInput);
        formulaText += ` = ${result}`;
        screen.innerText = result;
        formula.value = formulaText;
        currentInput = result.toString();
        formulaText = result;
    } 
    else if (value === "c") {
        currentInput = "";
        formulaText = "";
        screen.innerText = "";
        formula.value = "0";
    }else {
        currentInput += value;
        formulaText += value;
        screen.textContent = currentInput;
    }
}

document.querySelectorAll("td").forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.id;
         if (value !== "screen") {
            handleButtonClick(value); 
        }
    });
});
