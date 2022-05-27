const elForm = document.querySelector("form");
const elFormInput = document.querySelector(".form-control");
const elBtn = document.querySelector(".btn");
const textAge = document.querySelector(".answer")

elForm.addEventListener("submit",function(evt){
    evt.preventDefault()

    const inputValue = elFormInput.value;

    let  = inputValue;

    const calacNumber1 = function(valuesOne) {
    
        if(valuesOne % 3 === 0) {
            console.log("Fizz");
        } else if(valuesOne % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(valuesOne); 
        } 
    }

    textAge.textContent = `${textValue}`;



})