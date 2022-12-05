var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "Ayush Joshi"

console.log(txtInput)

function clickHandler() {
    outputDiv.innerText = "This is :  " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)

// // 1. textarea tag
// document.querySelector("textarea")
// btn-primary
// #input-btn
// "input[name='translator']"

